import { createContext, useState } from "react";
import { v4 } from "uuid";

import { AccordionProps, AccordionContextProps } from "./Accordion.d";
import "./Accordion.scss";

export const AccordionContext = createContext<AccordionContextProps>(null!);

export const Accordion = function(props: AccordionProps) {

    const [ id ] = useState<string>(`${Accordion.name}-${v4()}`)

    return (
        <AccordionContext.Provider value={{ accordionId: id }}>
            <div className="Accordion">
                <div className="accordion" id={id}>
                    {props.children}
                </div>
            </div>
        </AccordionContext.Provider>
    );

}
