
export type Certificate = {
    name: string,
    issuedDate: Date,
    certificatePath: string,
    issuers: string[]
}

export type Organization = {
    id: string,
    name: string,
    url: URL,
    imagePath: string
}

export type Cloud = {
    id: string,
    name: string,
    url: URL,
    imagePath: string
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
    imagePath: string
}

export type Language = {
    id: string,
    name: string,
    url: URL,
    imagePath: string
}

export type Linguistic = {
    id: string,
    name: string,
    imagePath: string
}

export type Software = {
    id: string,
    name: string,
    url: URL,
    imagePath: string
}

export type VersionControlSystem = {
    id: string,
    name: string,
    url: URL,
    imagePath: string
}

export type Project = {
    name: string,
    useCase: string,
    description: string,
    startDate: Date,
    stacks: string[]
}
