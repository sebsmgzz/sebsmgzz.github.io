import { Link } from "react-router-dom";

import { formatPhoneNumber } from "utils/strings"; 
import { FooterProps } from "./Footer.d";
import "./Footer.scss";

export const Footer = function(props: FooterProps) {
    return (
        <footer className="Footer container-fluid d-flex flex-wrap justify-content-between align-items-start py-3 mt-4 border-top">
            
            <div className="text-muted">{props.copyright}</div>

            <div className="col-md-4 d-flex flex-column align-items-end">
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <Link to={props.linkedin} target="_blank">
                            <i className="bi bi-linkedin"></i>
                        </Link>
                    </li>
                    <li className="ms-3">
                        <Link to={props.github} target="_blank">
                            <i className="bi bi-github"></i>
                        </Link>
                    </li>
                </ul>
                <div>
                    <a className="mx-3 text-muted" href={`https://wa.me/${props.phoneNumber}`} target="_blank">
                        {formatPhoneNumber(props.phoneNumber)}
                    </a>
                    <i className="bi bi-telephone-fill"></i>
                </div>
                <div>
                    <a className="mx-3 text-muted" href={`mailto:${props.email}`} target="_blank">
                        {props.email}
                    </a>
                    <i className="bi bi-envelope-fill"></i>
                </div>
            </div>

        </footer>
    );
}
