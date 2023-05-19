import { Fragment, useState } from "react";
import moment from "moment";

import { fetchAllProjects } from "apis/data";
import { Accordion, AccordionItem, AccordionHeader, AccordionBody, Spinner } from "components";
import { ProjectsPageProps, ProjectsPageData } from "./ProjectsPage.d";
import "./ProjectsPage.scss";

const fetchData = async function(): Promise<ProjectsPageData> {
    const projects = await fetchAllProjects();
    return { projects };
}

export const ProjectsPage = function(props: ProjectsPageProps) {

    const [ data, setData ] = useState<ProjectsPageData>();
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    if (data === undefined) {
        fetchData()
            .then(setData)
            .catch(console.log)
            .finally(() => setIsLoading(false));
    }

    if (isLoading) {
        return (
            <Spinner />
        );
    }

    return (
        <Fragment>
            <section className="ProjectsPageSection py-5 text-center container-fluid">
                <div className="row py-lg">
                    <div className="col mx-auto">
                        <h1 className="fw-light">Projects, activities, roles and responsibilities</h1>
                    </div>
                </div>
            </section>
            <section className="ProjectsPageSection container-fluid bg-light p-2">
                <Accordion>
                {
                    data?.projects.map(project => (
                        <AccordionItem>
                            <AccordionHeader title={project.name}>
                            {
                                project.stack.map((stack: string) => {
                                    const stackName = stack.replace("#", "sharp").replace("++", "pp")
                                    return (
                                        <span className={`badge rounded-pill stack-${stackName}`}>
                                            {stack}
                                        </span>
                                    );
                                })
                            }
                            </AccordionHeader>
                            <AccordionBody>
                                <div className="d-flex flex-column text-justify gap-2 w-100 justify-content-between">
                                    <small className="ms-auto opacity-50 text-nowrap">
                                        {moment(project.date).format("YYYY MMMM")}
                                    </small>
                                    <p className="mb-0">
                                        &emsp;<strong>Use case: </strong>
                                        {project.useCase}
                                    </p>
                                    <p className="mb-0">
                                        &emsp;<strong>Description: </strong>
                                        {project.description}
                                    </p>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                    ))
                }
                </Accordion>
            </section>
        </Fragment>
    );

}
