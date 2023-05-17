import { Fragment } from "react";

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
                                <span className="mx-3">Monterrey, N.L., México</span>
                            </li>

                            <li className="list-group-item">
                                <i className="bi bi-telephone-fill"></i>
                                <span className="mx-3">+52 826 2615753</span>
                            </li>

                            <li className="list-group-item">
                                <i className="bi bi-envelope-fill"></i>
                                <span className="mx-3">sebastian.mgzz@outlook.com</span>
                            </li>

                            <li className="list-group-item">
                                <i className="bi bi-linkedin"></i>
                                <span className="mx-3">LinkedIn</span>
                            </li>

                            <li className="list-group-item">
                                <i className="bi bi-github"></i>
                                <span className="mx-3">GitHub</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
        </Fragment>
    );
    
}
