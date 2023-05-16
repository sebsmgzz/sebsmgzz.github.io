import { Fragment } from "react";

import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from "components";
import { ProjectsPageProps } from "./ProjectsPage.d";
import "./ProjectsPage.scss";

export const ProjectsPage = function(props: ProjectsPageProps) {
    return (
        <Fragment>
            <Accordion>
                <AccordionItem>
                    <AccordionHeader />
                    <AccordionBody />
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader />
                    <AccordionBody />
                </AccordionItem>
            </Accordion>
        </Fragment>
    );
}
