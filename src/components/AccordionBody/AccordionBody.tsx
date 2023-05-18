import { useContext } from "react";

import { AccordionItemContext } from "components";
import { AccordionBodyProps } from "./AccordionBody.d";
import "./AccordionBody.scss";

export const AccordionBody = function(props: AccordionBodyProps) {
    
    const context = useContext(AccordionItemContext);
    
    return (
        <div
            className="AccordionBody accordion-collapse collapse"
            id={context.bodyId}
            aria-labelledby={context.headerId}
            data-bs-parent={`#${context.accordionId}`}>
            <div className="accordion-body">
                {props.children}
            </div>
        </div>
    );

}
