import { AccordionItemProps } from "components";

export type AccordionProps = {
    children: ReactElement<AccordionItemProps> | ReactElement<AccordionItemProps>[];
}

export type AccordionContextProps = {
    accordionId: string
}
