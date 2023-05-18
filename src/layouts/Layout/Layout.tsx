import { Fragment } from "react";

import * as routes from "global/routes";
import { my, urls } from "global/constants";
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

            <Footer 
                copyright={`© 2023 ${my.shortName}`} 
                phoneNumber={my.phoneNumber}
                phoneUrl={urls.whatapp}
                email={my.email}
                linkedin={urls.linkedin}
                github={urls.github}/>

        </Fragment>
    );
}
