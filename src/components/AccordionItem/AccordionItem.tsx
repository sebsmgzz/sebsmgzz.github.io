import { createContext, useState, useContext } from "react";
import { v4 } from "uuid";

import { AccordionBody, AccordionContext, AccordionHeader } from "components";
import { AccordionItemProps, AccordionItemContextProps } from "./AccordionItem.d";
import "./AccordionItem.scss";

export const AccordionItemContext = createContext<AccordionItemContextProps>(null!);

export const AccordionItem = function(props: AccordionItemProps) {

    const [ bodyId ] = useState<string>(`${AccordionBody.name}-${v4()}`);
    const [ headerId ] = useState<string>(`${AccordionHeader.name}-${v4()}`);
    const context = useContext(AccordionContext);

    return (
        <AccordionItemContext.Provider value={{
            accordionId: context.accordionId,
            bodyId: bodyId,
            headerId: headerId
        }}>
            <div className="AccordionItem accordion-item">
                {props.children}
            </div>
        </AccordionItemContext.Provider>
    );

}
