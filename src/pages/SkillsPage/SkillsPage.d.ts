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
    Cloud = "Clouds",
    Database = "Databases",
    OS = "Operating system",
    Feed = "Feeds",
    Framework = "Frameworks",
    Code = "Code languages",
    Language = "Languages",
    Software = "Softwares",
    VCS = "Version control"
}
