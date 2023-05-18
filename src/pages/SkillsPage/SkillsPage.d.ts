import { Cloud, Database, Feed, Framework, Language, Linguistic, Software, VersionControlSystem } from "apis/data.d";

export type SkillsPageProps = {

}

export type SkillsPageData = {
    clouds: Array<Cloud>,
    databases: Array<Database>,
    feeds: Array<Feed>,
    frameworks: Array<Framework>,
    codes: Array<Language>,
    languages: Array<Linguistic>,
    softwares: Array<Software>,
    vcs: Array<VersionControlSystem>
}
