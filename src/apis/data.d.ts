
export type Certificate = {
    title: string,
    issuedAt: Date,
    path: string,
    organizations: string[]
}

export type Cloud = {
    id: string,
    name: string,
    refUrl: URL,
    imagePath: string
}

export type Code = {
    id: string,
    name: string,
    category: CodeCategory,
    refUrl: URL,
    imagePath: string
}

export enum CodeCategory {
    Programming = "programming",
    Markup = "markup",
    Spreadsheet = "stylesheet",
    Shell = "shell"
}

export type Database = {
    id: string,
    name: string,
    refUrl: URL,
    imagePath: string
}

export type Feed = {
    id: string,
    name: string,
    refUrl: URL,
    imagePath: string
}

export type Framework = {
    id: string,
    name: string,
    code: string,
    imagePath: string
}

export type Language = {
    id: string,
    name: string,
    imagePath: string
}

export type Organization = {
    id: string,
    name: string,
    refUrl: URL,
    imagePath: string
}

export type Project = {
    id: number,
    name: string,
    useCase: string,
    description: string,
    date: Date,
    stack: string[]
}

export type Software = {
    id: string,
    name: string,
    category: SoftwareType,
    refUrl: URL,
    imagePath: string
} 

export enum SoftwareType {
    Virtualization = "virtualization",
    IDEsAndSimilar = "ides-and-similar",
    Misc = "misc",
    DatabaseClient = "database-client",
    CAD = "cad"
}

export type VersionControlSystem = {
    id: string,
    name: string,
    refUrl: URL,
    imagePath: string
}
