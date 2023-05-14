
import { NavBar } from "layouts";
import { HeaderProps } from "./Header.d";
import "./Header.scss";

export const Header = function(props: HeaderProps) {
    return (
        <header className="container d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <NavBar />
        </header>
    );
}
