import moment from "moment";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";

import { Card, CardSink, Spinner } from "components";
import { fetchCertificates, fetchOrganizations } from "apis/public";

import { EducationPageProps, EducationPageData } from "./EducationPage.d";
import "./EducationPage.scss";

const fetchData = async function(): Promise<EducationPageData> {
    const certificates = await fetchCertificates();
    const organizations = await fetchOrganizations();
    return {
        certificates: certificates
            .map(cert => Object.assign(cert, {
                issuers: organizations
                    .filter(org => cert.issuers.includes(org.id))
                    .sort((left, right) => left.id === "coursera" ? 1 : 0)
            }))
            .sort((left, right) => right.issuedDate.getTime() - left.issuedDate.getTime())
    };
}

export const EducationPage = function(props: EducationPageProps) {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ data, setData ] = useState<EducationPageData>();

    if (data === undefined) {
        fetchData()
            .then(setData)
            .catch(console.log)
            .finally(() => setIsLoading(false));
    }

    if (isLoading) {
        return (
            <Spinner />
        );
    }

    return (
        <Fragment>
            <section className="py-5 text-center container">
                <div className="row py-lg">
                    <div className="col mx-auto">
                        <h1 className="fw-light">Certificates, degrees, badges and other diplomas</h1>
                    </div>
                </div>
            </section>
            <section className="container-fluid py-5 px-3 bg-light">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {
                    data?.certificates.map(certificate => (
                        <Card
                            title={certificate.name}
                            subtitle={moment(certificate.issuedDate).format("MMMM YYYY")}
                            src={certificate.issuers[0].imagePath}>
                            <CardSink>
                            {
                                certificate.issuers.map(issuer => (
                                    <Link to={issuer.url} target="_blank">
                                        {issuer.name}
                                    </Link>
                                ))
                            }
                            </CardSink>
                        </Card>
                    ))
                }
                </div>
            </section>
        </Fragment>
    );
    
}
