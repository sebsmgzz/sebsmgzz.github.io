import * as d from "apis/data.d";

export type SkillsPageProps = {

}

export type SkillsPageData = {
    clouds: Array<CloudData>,
    databases: Array<DatabaseData>,
    feeds: Array<FeedData>,
    frameworks: Array<FrameworkData>,
    codes: Array<CodeData>,
    languages: Array<LanguageData>,
    softwares: Array<SoftwareData>,
    vcss: Array<VersionControlSystemData>
}

export type CloudData = d.Cloud & {
    imagePath: string
}

export type DatabaseData = d.Database & {
    imagePath: string
}

export type FeedData = d.Feed & {
    imagePath: string
}

export type FrameworkData = d.Framework & {
    imagePath: string
}

export type CodeData = d.Code & {
    imagePath: string
}

export type LanguageData = d.Language & {
    imagePath: string
}

export type SofwareData = d.Software  & {
    imagePath: string
}

export type VersionControlSystemData = d.VersionControlSystem & {
    imagePath: string
}
