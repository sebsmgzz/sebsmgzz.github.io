import * as d from "apis/data.d";

export type SkillsPageProps = {

}

export type SkillsPageData = {
    skills: Array<SkillData>
}

export type SkillData = {
    id: string,
    name: string,
    category: SkillCategory,
    imagePath: string
}

export enum SkillCategory {
    Cloud = "cloud",
    Database = "database",
    Feed = "feed",
    Framework = "framework",
    Code = "code",
    Language = "language",
    Software = "software",
    VCS = "vcs"
}
