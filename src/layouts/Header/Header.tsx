
import { HeaderProps } from "./Header.d";
import "./Header.scss";

export const Header = function(props: HeaderProps) {
    return (
        <header className="container-fluid d-flex flex-wrap justify-content-center my-3 border-bottom">
            {props.children}
        </header>
    );
}
