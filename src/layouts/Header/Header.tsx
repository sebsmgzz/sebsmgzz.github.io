import { Link } from "react-router-dom";
import "./Header.scss";

export type HeaderProps = {

}

export const Header = function(props: HeaderProps) {
    return (
        <header className="container d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span className="fs-4">Sebastián</span>
            </Link>

            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/education" className="nav-link">Education</Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects" className="nav-link">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link to="/skills" className="nav-link">Skills</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
