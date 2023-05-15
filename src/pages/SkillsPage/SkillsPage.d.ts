import { Cloud, Database, Feed, Framework, Language, Linguistic, Software, VersionControlSystem } from "apis/public/index.d";

export type SkillsPageProps = {

}

export type SkillsPageData = {
    clouds: Array<Cloud>,
    databases: Array<Database>,
    feeds: Array<Feed>,
    frameworks: Array<Framework>,
    languages: Array<Language>,
    linguistics: Array<Linguistic>,
    softwares: Array<Software>,
    vcs: Array<VersionControlSystem>
}
