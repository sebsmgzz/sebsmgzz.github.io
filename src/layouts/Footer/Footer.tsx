import { FooterProps } from "./Footer.d";
import "./Footer.scss";

export const Footer = function(props: FooterProps) {
    return (
        <footer className="Footer container-fluid d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            
            <div className="col-md-4 d-flex align-items-center">
                <span className="text-muted">© 2023 Sebastián M. Gzz.</span>
            </div>

            {props.children}

        </footer>
    );
}
