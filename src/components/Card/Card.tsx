
import { CardSink } from "components";

import { CardProps } from "./Card.d";
import "./Card.scss";

export const Card = function(props: CardProps) {
    return (
        <div className="CertificateCard col">
            <div className="card shadow-sm">
                
                <img src={props.src} className="card-img-top" alt={props.title} />
                <div className="card-body">
                                    
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary text-muted">{props.subtitle}</h6>

                    {props.children}
                    
                </div>

            </div>
        </div>
    );
}
