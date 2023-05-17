
import { CardSinkProps } from "./CardSink.d";
import "./CardSink.scss";

export const CardSink = function(props: CardSinkProps) {
    return (
        <ul className="list-group list-group-flush">
        {
            props.children?.map((child, index) => (
                <li className="list-group-item" key={index}>
                    {child}
                </li>
            ))
        }
        </ul>
    );
}
