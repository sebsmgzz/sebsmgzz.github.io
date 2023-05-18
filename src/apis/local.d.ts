
export type Certificate = {
    id: number,
    title: string,
    issuedAt: Date,
    path: string,
    organizationsIds: string[]
}

export type Cloud = {
    id: string,
    name: string,
    url: URL,
    imagePath: string
}

export type CodingLanguage = {
    id: string,
    name: string,
    type: CodingLanguageType,
    url: URL,
    imagePath: string
}

export enum CodingLanguageType {
    Programming,
    Markup,
    Spreadsheet,
    Shell
}

export type Database = {
    id: string,
    name: string,
    url: URL,
    imagePath: string
}

export type Feed = {
    id: string,
    name: string,
    url: URL,
    imagePath: string
}

export type Framework = {
    id: string,
    name: string,
    codingLanguageId: string,
    imagePath: string
}

export type LinguisticLanguage = {
    id: string,
    name: string,
    imagePath: string
}

export type Organization = {
    id: string,
    name: string,
    url: URL,
    imagePath: string
}

export type Projects = {
    id: number,
    name: string,
    useCase: string,
    description: string,
    startDate: Date,
    stacks: string[]
}

export type Software = {
    id: string,
    name: string,
    type: SoftwareType,
    url: URL,
    imagePath: string
} 

export enum SoftwareType {
    Virtualization,
    IDEs,
    Misc,
    Databases,
    CAD
}

export type VersionControlSystem = {
    id: string,
    name: string,
    url: URL,
    imagePath: string
}
