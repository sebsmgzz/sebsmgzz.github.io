import { Fragment } from "react";

import { my, urls } from "constants/core";
import { formatPhoneNumber } from "utils/strings";
import { ContactPageProps } from "./ContactPage.d";
import "./ContactPage.scss";

export const ContactPage = function(props: ContactPageProps) {

    return (
        <Fragment>
            <section className="ContactPageSection py-5 text-center container-fluid">
                <div className="row py-lg">
                    <div className="col mx-auto">
                        <h1 className="fw-light">Reach out, say hi, I am always happy to talk</h1>
                    </div>
                </div>
            </section>
            <section className="ContactPageSection container">
                <div className="card">
                    <div className="card-body">
                        <ul className="list-group list-group-flush">

                            <li className="list-group-item">
                                <i className="bi bi-geo-alt-fill"></i>
                                <a className="mx-3" href={urls.location} target="_blank">
                                    Monterrey, N.L., México
                                </a>
                            </li>

                            <li className="list-group-item">
                                <i className="bi bi-telephone-fill"></i>
                                <a className="mx-3" href={urls.whatapp} target="_blank">
                                    {formatPhoneNumber(my.phoneNumber)}
                                </a>
                            </li>

                            <li className="list-group-item">
                                <i className="bi bi-envelope-fill"></i>
                                <a className="mx-3" href={`mailto:${my.email}`} target="_blank">
                                    {my.email}
                                </a>
                            </li>

                            <li className="list-group-item">
                                <i className="bi bi-linkedin"></i>
                                <a className="mx-3" href={urls.linkedin} target="_blank">
                                    LinkedIn
                                </a>
                            </li>

                            <li className="list-group-item">
                                <i className="bi bi-github"></i>
                                <a className="mx-3" href={urls.github} target="_blank">
                                    GitHub
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
        </Fragment>
    );
    
}
