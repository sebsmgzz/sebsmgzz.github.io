import NavBar from "layouts/NavBar/NavBar";
import "./Header.scss";

export type HeaderProps = {
}

export const Header = function(props: HeaderProps) {
    return (
        <header className="container d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <NavBar />
        </header>
    );
}

export default Header;
