import { Outlet } from "react-router-dom";

export type MainProps = {

}

export const Main = function(props: MainProps) {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default Main;
