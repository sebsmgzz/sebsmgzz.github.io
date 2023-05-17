
import { CardProps } from "./Card.d";
import "./Card.scss";

export const Card = function(props: CardProps) {
    return (
        <div className="CertificateCard col">
            <div className="card shadow-sm">
                
                <img src={props.src} className="card-img-top" alt={props.title} />
                <div className="card-body">
                                    
                    <h6 className="card-subtitle p-2 mb-2 text-end text-body-secondary text-muted">{props.subtitle}</h6>
                    <h5 className="card-title text-center">{props.title}</h5>
                    {props.children}
                    
                </div>

            </div>
        </div>
    );
}
