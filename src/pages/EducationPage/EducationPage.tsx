import moment from "moment";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";

import { Card, CardSink, Spinner } from "components";
import { fetchAllCertificates, fetchAllOrganizations } from "apis/local";

import { EducationPageProps, EducationPageData, IssuerData } from "./EducationPage.d";
import "./EducationPage.scss";

const fetchData = async function(): Promise<EducationPageData> {
    const certificates = await fetchAllCertificates();
    const organizations = await fetchAllOrganizations();
    return {
        certificates: certificates
            .map(certificate => Object.assign(certificate, {
                issuers: organizations
                    .filter(org => certificate.organizationsIds.includes(org.id))
                    .sort((left, right) => left.id === "coursera" ? 1 : 0)
                    .map(organization => organization as IssuerData)
            }))
            .sort((left, right) => right.issuedAt.getTime() - left.issuedAt.getTime())
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
            <section className="py-5 text-center container-fluid">
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
                            key={certificate.id}
                            title={certificate.name}
                            subtitle={moment(certificate.issuedDate).format("MMMM YYYY")}
                            src={certificate.issuers[0].imagePath}>
                            <CardSink>
                            {
                                certificate.issuers.map(issuer => (
                                    <Link to={issuer.url} target="_blank" key={issuer.id}>
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
