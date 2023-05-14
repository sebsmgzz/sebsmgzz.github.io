
import { CardSinkProps } from "./CardSink.d";
import "./CardSink.scss";

export const CardSink = function(props: CardSinkProps) {
    return (
        <ul className="list-group list-group-flush">
        {
            props.children?.map(child => (
                <li className="list-group-item">
                    {child}
                </li>
            ))
        }
        </ul>
    );
}
