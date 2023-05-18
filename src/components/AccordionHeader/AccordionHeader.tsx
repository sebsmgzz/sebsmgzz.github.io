import { useContext } from "react";

import { AccordionItemContext } from "components";
import { AccordionHeaderProps } from "./AccordionHeader.d";
import "./AccordionHeader.scss";

export const AccordionHeader = function(props: AccordionHeaderProps) {

    const context = useContext(AccordionItemContext);

    return (
        <h2 className="AccordionHeader accordion-header" id={context.headerId}>
            <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${context.bodyId}`}
                aria-expanded="false"
                aria-controls={context.bodyId}>
                <div className="flex flex-column flex-grow-1 text-center">
                    <div className="my-1">{props.title}</div>
                    <div className="">
                        {props.children}
                    </div>
                </div>
            </button>
        </h2>
    );

}
