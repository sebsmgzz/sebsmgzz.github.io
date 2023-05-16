import { useContext } from "react";

import { AccordionItemContext } from "components";
import { AccordionBodyProps } from "./AccordionBody.d";
import "./AccordionBody.scss";

export const AccordionBody = function(props: AccordionBodyProps) {
    
    const context = useContext(AccordionItemContext);
    
    return (
        <div
            className="accordion-collapse collapse"
            id={context.bodyId}
            aria-labelledby={context.headerId}
            data-bs-parent={`#${context.accordionId}`}>
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
    );

}
