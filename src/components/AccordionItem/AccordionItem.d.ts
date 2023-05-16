import { AccordionContextProps } from "components";
import { ReactNode } from "react";

export type AccordionItemProps = {
    children: ReactNode
}

export type AccordionItemContextProps = AccordionContextProps & {
    bodyId: string,
    headerId: string
}
