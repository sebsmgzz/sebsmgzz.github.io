import { Link } from "react-router-dom";
import { endpoints } from "global/constants";
import { v4 } from "uuid";

import { NavBarProps } from "./NavBar.d";
import "./NavBar.scss";

export const NavBar = function(props: NavBarProps) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

            <Link className="navbar-brand mb-0 h1 px-1" to={endpoints.homePage}>
                <img className="d-inline-block align-top" 
                    src="favicon.ico" 
                    alt="" loading="lazy" 
                    width="30" height="30" />
                <span className="px-1">
                    Home
                </span>
            </Link>

            <button className="navbar-toggler collapsed mx-3 px-2"
                onBlur={(e) => {
                    const div = document.querySelector(`#${props.id}`) as HTMLDivElement;
                    if (div.className.includes("show")) {
                        e.target.dispatchEvent(new Event("click"));
                    }
                }}
                data-bs-toggle="collapse" 
                data-bs-target={`#${props.id}`} 
                aria-controls={`${props.id}`} 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                type="button">
                <span className="navbar-toggler-icon">
                    <i className="bi bi-list"></i>
                </span>
            </button>

            <div className="navbar-collapse collapse" id={props.id}>
                <div className="navbar-nav">
                    <Link className="nav-link mx-3" to={endpoints.educationPage}>Education</Link>
                    <Link className="nav-link mx-3" to={endpoints.projectsPage}>Projects</Link>
                    <Link className="nav-link mx-3" to={endpoints.skillsPage}>Skills</Link>
                    <Link className="nav-link mx-3" to={endpoints.contactPage}>Contact</Link>
                </div>
            </div>

        </nav>
    );
}

NavBar.defaultProps = {
    id: v4()
}
