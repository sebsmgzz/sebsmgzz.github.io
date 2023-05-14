import moment from "moment";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";

import { Card, CardSink } from "components";
import { fetchCertificates, fetchOrganizations } from "apis/public";

import { Certificate, EducationPageProps } from "./EducationPage.d";
import "./EducationPage.scss";

const fetchData = async function(): Promise<Array<Certificate>> {
    const certificates = await fetchCertificates();
    const organizations = await fetchOrganizations();
    return certificates
        .map(cert => ({
            name: cert.name,
            issuedDate: cert.issuedDate,
            certificatePath: cert.certificatePath,
            issuers: organizations
                .filter(org => cert.issuers.includes(org.id))
                .sort((left, right) => left.id === "coursera"? 1 : 0)
                .map(org => ({
                    name: org.name,
                    url: org.url,
                    imagePath: org.imagePath
                }))
        }))
        .sort((left, right) => right.issuedDate.getTime() - left.issuedDate.getTime());
}

export const EducationPage = function(props: EducationPageProps) {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ certificates, setCertificates ] = useState<Array<Certificate>>();

    if (certificates === undefined) {
        fetchData()
            .then(setCertificates)
            .catch(console.log)
            .finally(() => setIsLoading(false));
    }

    if (isLoading) {
        return (
            <div>Loading...</div>
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
                    certificates?.map(certificate => (
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
