import { Link } from "react-router-dom";

import { NavBarLinkProps } from "./NavBarLink.d";
import "./NavBarLink.scss";

export const NavBarLink = function(props: NavBarLinkProps) {
    
    return ( 
        <Link className="nav-link mx-3" to={props.route}>
            {props.children}
        </Link>
    );

}
