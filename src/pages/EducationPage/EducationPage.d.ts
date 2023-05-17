export { Certificate, Organization } from "apis/local";

export type EducationPageProps = {

}

export type EducationPageData = {
    certificates: Array<Certificate & {
        issuers: Array<{ 
            id: string,
            name: string,
            url: URL,
            imagePath: string
        }>
    }>
}

export type CertificateData = Certificate & {
    issuers: Array<IssuerData>
}

export type IssuerData = { 
    id: string,
    name: string,
    url: URL,
    imagePath: string
}
