import { Fragment, useState } from "react";

import * as images from "constants/imgs";
import * as dataApi from "apis/data";
import { Spinner } from "components";
import { SkillsPageProps, SkillsPageData } from "./SkillsPage.d";
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
        clouds: clouds.map(cloud => ({
            ...cloud,
            imagePath: images.clouds[cloud.id]
        })),
        databases: databases.map(database => ({
            ...database,
            imagePath: images.databases[database.id]
        })),
        feeds: feeds.map(feed => ({
            ...feed,
            imagePath: images.feeds[feed.id]
        })),
        frameworks: frameworks.map(framework => ({
            ...framework,
            imagePath: images.frameworks[framework.id]
        })),
        codes: codes.map(code => ({
            ...code,
            imagePath: images.codes[code.id]
        })),
        languages: languages.map(language => ({
            ...language,
            imagePath: images.languages[language.id]
        })),
        softwares: softwares.map(software => ({
            ...software,
            imagePath: images.softwares[software.id]
        })),
        vcss: vcss.map(vcs => ({
            ...vcs,
            imagePath: images.vcss[vcs.id]
        }))
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
                        data?.clouds.map(cloud => (
                            <div className="col col-lg-2" key={cloud.id}>
                                <img className="bd-placeholder-img" 
                                    src={cloud.imagePath} width="140" />
                                <h2 className="text-center">{cloud.name}</h2>
                            </div>
                        ))
                    }
                    {
                        data?.databases.map(database => (
                            <div className="col col-lg-2" key={database.id}>
                                <img className="bd-placeholder-img" 
                                    src={database.imagePath} width="140" />
                                <h2 className="text-center">{database.name}</h2>
                            </div>
                        ))
                    }
                    {
                        data?.feeds.map(feed => (
                            <div className="col col-lg-2" key={feed.id}>
                                <img className="bd-placeholder-img" 
                                    src={feed.imagePath} width="140" />
                                <h2 className="text-center">{feed.name}</h2>
                            </div>
                        ))
                    }
                    {
                        data?.frameworks.map(frameworks => (
                            <div className="col col-lg-2" key={frameworks.id}>
                                <img className="bd-placeholder-img" 
                                    src={frameworks.imagePath} width="140" />
                                <h2 className="text-center">{frameworks.name}</h2>
                            </div>
                        ))
                    }
                    {
                        data?.codes.map(code => (
                            <div className="col col-lg-2" key={code.id}>
                                <img className="bd-placeholder-img" 
                                    src={code.imagePath} width="140" />
                                <h2 className="text-center">{code.name}</h2>
                            </div>
                        ))
                    }
                    {
                        data?.languages.map(language => (
                            <div className="col col-lg-2" key={language.id}>
                                <img className="bd-placeholder-img" 
                                    src={language.imagePath} width="140" />
                                <h2 className="text-center">{language.name}</h2>
                            </div>
                        ))
                    }
                    {
                        data?.softwares.map(software => (
                            <div className="col col-lg-2" key={software.id}>
                                <img className="bd-placeholder-img" 
                                    src={software.imagePath} width="140" />
                                <h2 className="text-center">{software.name}</h2>
                            </div>
                        ))
                    }
                    {
                        data?.vcss.map(vcs => (
                            <div className="col col-lg-2" key={vcs.id}>
                                <img className="bd-placeholder-img" 
                                    src={vcs.imagePath} width="140" />
                                <h2 className="text-center">{vcs.name}</h2>
                            </div>
                        ))
                    }

                </div>
            </section>
        </Fragment>
    );

}
