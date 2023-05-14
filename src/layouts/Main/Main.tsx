import { Outlet } from "react-router-dom";

import { MainProps } from "./Main.d";
import "./Main.scss";

export const Main = function(props: MainProps) {
    return (
        <main>
            <Outlet />
        </main>
    );
}
