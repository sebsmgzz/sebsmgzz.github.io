import { useContext } from "react";

import { AccordionItemContext } from "components";
import { AccordionHeaderProps } from "./AccordionHeader.d";
import "./AccordionHeader.scss";

export const AccordionHeader = function(props: AccordionHeaderProps) {

    const context = useContext(AccordionItemContext);

    return (
        <h2 className="accordion-header" id={context.headerId}>
            <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${context.bodyId}`}
                aria-expanded="false"
                aria-controls={context.bodyId}>
                <span>Accordion Item #2</span>
                <div className="badges">
                    <span className="badge rounded-pill bg-primary">Primary</span>
                    <span className="badge rounded-pill bg-primary">Primary</span>
                    <span className="badge rounded-pill bg-primary">Primary</span>
                </div>
            </button>
        </h2>
    );

}
