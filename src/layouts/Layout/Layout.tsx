import { Link } from "react-router-dom";
import { Fragment } from "react";

import * as routes from "global/routes";
import * as urls from "global/urls";
import { Header, Main, Footer, NavBar, NavBarLink } from "layouts";
import { LayoutProps } from "./Layout.d";
import "./Layout.scss";

export const Layout = function(props: LayoutProps) {
    return (
		<Fragment>
            
            <Header>
                <NavBar title="Sebastián" src="favicon.ico" root={routes.homePage}>
                    <NavBarLink route={routes.educationPage}>Education</NavBarLink>
                    <NavBarLink route={routes.projectsPage}>Projects</NavBarLink>
                    <NavBarLink route={routes.skillsPage}>Skills</NavBarLink>
                    <NavBarLink route={routes.contactPage}>Contact</NavBarLink>
                </NavBar>
            </Header>

            <Main />

            <Footer copyright="© 2023 Sebastián M. Gzz.">
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <Link to={urls.linkedin} className="linkedin" target="_blank">
                            <i className="bi bi-linkedin"></i>
                        </Link>
                    </li>
                    <li className="ms-3">
                        <Link to={urls.github} className="github" target="_blank">
                            <i className="bi bi-github"></i>
                        </Link>
                    </li>
                </ul>
            </Footer>

        </Fragment>
    );
}
