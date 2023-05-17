import { Fragment, useState } from "react";

import * as localApi from "apis/local";
import { Spinner } from "components";
import { SkillsPageProps, SkillsPageData } from "./SkillsPage.d";
import "./SkillsPage.scss";

const fetchData = async function(): Promise<SkillsPageData> {
    const clouds = await localApi.fetchAllClouds();
    const databases = await localApi.fetchAllDatabases();
    const feeds = await localApi.fetchAllFeeds();
    const frameworks = await localApi.fetchAllFrameworks();
    const codingLanguages = await localApi.fetchAllCodingLanguages();
    const linguisticLanguage = await localApi.fetchAllLinguisticLanguages();
    const softwares = await localApi.fetchAllSoftwares();
    const versionControlSystem = await localApi.fetchAllVersionControlSystems();
    return { 
        clouds,
        databases,
        feeds,
        frameworks,
        languages: codingLanguages,
        linguistics: linguisticLanguage,
        softwares,
        vcs: versionControlSystem
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
    console.log(data?.feeds);
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
                        data?.languages.map(language => (
                            <div className="col col-lg-2" key={language.id}>
                                <img className="bd-placeholder-img" 
                                    src={language.imagePath} width="140" />
                                <h2 className="text-center">{language.name}</h2>
                            </div>
                        ))
                    }
                    {
                        data?.linguistics.map(linguistic => (
                            <div className="col col-lg-2" key={linguistic.id}>
                                <img className="bd-placeholder-img" 
                                    src={linguistic.imagePath} width="140" />
                                <h2 className="text-center">{linguistic.name}</h2>
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
                        data?.vcs.map(vc => (
                            <div className="col col-lg-2" key={vc.id}>
                                <img className="bd-placeholder-img" 
                                    src={vc.imagePath} width="140" />
                                <h2 className="text-center">{vc.name}</h2>
                            </div>
                        ))
                    }

                </div>
            </section>
        </Fragment>
    );

}
