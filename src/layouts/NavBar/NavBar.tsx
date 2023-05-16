import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

import { NavBarProps } from "./NavBar.d";
import "./NavBar.scss";

export const NavBar = function(props: NavBarProps) {

    const [ id ] = useState<string>(`${NavBar.name}-${v4()}`);

    return (
        <nav className="navbar px-3 py-2 navbar-expand-lg navbar-dark bg-dark fixed-top">

            <Link className="navbar-brand mb-0 h1 px-1" to={props.root}>
                <img className="d-inline-block align-top" 
                    src={props.src} 
                    alt="" loading="lazy" 
                    width="30" height="30" />
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
                <span className="navbar-toggler-icon">
                    <i className="bi bi-list"></i>
                </span>
            </button>

            <div className="navbar-collapse collapse" id={id}>
                <div className="navbar-nav">
                    {props.children}
                </div>
            </div>

        </nav>
    );
}
