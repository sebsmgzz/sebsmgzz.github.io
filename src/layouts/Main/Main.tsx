import { Outlet } from "react-router-dom";
import "./Main.scss";

export type MainProps = {

}

export const Main = function(props: MainProps) {
    return (
        <main>
            <Outlet />
        </main>
    );
}

export default Main;
