
export type Certificate = {
    name: string,
    issuedDate: Date,
    certificatePath: string,
    issuers: Array<Issuer>
}

export type Issuer = { 
    name: string,
    url: URL,
    imagePath: string
}

export type EducationPageProps = {

}
