import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

import { NavBarProps } from "./NavBar.d";
import "./NavBar.scss";

export const NavBar = function(props: NavBarProps) {

    const [ id ] = useState<string>(`${NavBar.name}-${v4()}`);

    return (
        <nav className="NavBar navbar px-3 py-2 navbar-expand-lg navbar-dark bg-dark fixed-top">

            <Link className="navbar-brand mb-0 h1 px-1" to={props.root}>
                <img className="d-inline-block align-top" 
                    src={props.src} 
                    alt="" loading="lazy" 
                    width="30" height="30" />
                <span className="align-middle px-2">{props.title}</span>
            </Link>

            <button className="navbar-toggler collapsed mx-3 px-2"
                onBlur={(e) => {
                    const div = document.querySelector(`#${id}`) as HTMLDivElement;
                    if (div.className.includes("show")) {
                        e.target.dispatchEvent(new Event("click"));
                    }
                }}
                data-bs-toggle="collapse" 
                data-bs-target={`#${id}`} 
                aria-controls={`${id}`} 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                type="button">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="navbar-collapse collapse justify-content-end" id={id}>
                <div className="navbar-nav align-items-end">
                    {props.children}
                </div>
            </div>

        </nav>
    );
}
