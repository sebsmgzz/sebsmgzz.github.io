import { Fragment, useState } from "react";

import * as images from "constants/imgs";
import * as dataApi from "apis/data";
import { Spinner } from "components";
import { SkillsPageProps, SkillsPageData, SkillCategory, SkillData } from "./SkillsPage.d";
import "./SkillsPage.scss";

const fetchData = async function(): Promise<SkillsPageData> {
    const clouds = await dataApi.fetchAllClouds();
    const codes = await dataApi.fetchAllCodes();
    const databases = await dataApi.fetchAllDatabases();
    const feeds = await dataApi.fetchAllFeeds();
    const frameworks = await dataApi.fetchAllFrameworks();
    const languages = await dataApi.fetchAllLanguages();
    const softwares = await dataApi.fetchAllSoftwares();
    const vcss = await dataApi.fetchAllVCSs();
    return {
        skills: [
            ...clouds.map<SkillData>(cloud => ({
                id: cloud.id,
                name: cloud.name,
                category: SkillCategory.Cloud,
                imagePath: images.clouds[cloud.id]
            })),
            ...databases.map<SkillData>(database => ({
                id: database.id,
                name: database.name,
                category: SkillCategory.Database,
                imagePath: images.databases[database.id]
            })),
            ...feeds.map<SkillData>(feed => ({
                id: feed.id,
                name: feed.name,
                category: SkillCategory.Feed,
                imagePath: images.feeds[feed.id]
            })),
            ...frameworks.map<SkillData>(framework => ({
                id: framework.id,
                name: framework.name,
                category: SkillCategory.Framework,
                imagePath: images.frameworks[framework.id]
            })),
            ...codes.map<SkillData>(code => ({
                id: code.id,
                name: code.name,
                category: SkillCategory.Code,
                imagePath: images.codes[code.id]
            })),
            ...languages.map<SkillData>(language => ({
                id: language.id,
                name: language.name,
                category: SkillCategory.Language,
                imagePath: images.codes[language.id]
            })),
            ...softwares.map<SkillData>(software => ({
                id: software.id,
                name: software.name,
                category: SkillCategory.Software,
                imagePath: images.codes[software.id]
            })),
            ...vcss.map<SkillData>(vcs => ({
                id: vcs.id,
                name: vcs.name,
                category: SkillCategory.VCS,
                imagePath: images.vcss[vcs.id]
            }))
        ]
    };
}

export const SkillsPage = function(props: SkillsPageProps) {

    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ data, setData ] = useState<SkillsPageData>();

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
            <section className="SkillsPageSection py-5 text-center container-fluid">
                <div className="row py-lg">
                    <div className="col mx-auto">
                        <h1 className="fw-light">Skills, talents, expertise, and other knwoledgable areas</h1>
                    </div>
                </div>
            </section>
            <section className="SkillsPageSection container-fluid">
                <div className="row">
                {
                    data?.skills.map(skill => (
                        <div className="col col-lg-2" key={skill.id}>
                            <img className="bd-placeholder-img" 
                                src={skill.imagePath} width="140" />
                            <h2 className="text-center">{skill.name}</h2>
                        </div>
                    ))
                }
                </div>
            </section>
        </Fragment>
    );

}
