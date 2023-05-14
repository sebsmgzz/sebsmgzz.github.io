import moment from "moment";
import "./CertificateCard.scss";
import { Link } from "react-router-dom";

export type CertificateCardProps = {
    title: string,
    src: string,
    issuers: CertificateIssuer[],
    issuedAt: Date
}

export type CertificateIssuer = {
    name: string,
    url: string
}

export const CertificateCard = function(props: CertificateCardProps) {
    const issuedAt = moment(props.issuedAt).format("MMMM YYYY");
    return (
        <div className="CertificateCard col">
            <div className="card shadow-sm">
                
                <img src={props.src} className="card-img-top" alt="..." />
                <div className="card-body">
                                    
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary text-muted">Issued {issuedAt}</h6>

                    <ul className="list-group list-group-flush">
                    {
                        props.issuers.map(issuer => (
                            <li className="list-group-item">
                                <Link to={issuer.url} target="_blank">
                                    {issuer.name}
                                </Link>
                            </li>
                        ))
                    }
                    </ul>
                    
                </div>

            </div>
        </div>
    );
}

CertificateCard.defaultProps = {
    issuers: []
};

export default CertificateCard;
