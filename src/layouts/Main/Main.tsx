import { Outlet } from "react-router-dom";

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
