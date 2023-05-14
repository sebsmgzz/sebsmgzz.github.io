
import { SpinnerProps } from "./Spinner.d";
import "./Spinner.scss";

export const Spinner = function(props: SpinnerProps) {
    return (
        <div className="text-center m-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
