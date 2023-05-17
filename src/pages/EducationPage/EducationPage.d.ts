export { Certificate, Organization } from "apis/local.d";

export type EducationPageProps = {

}

export type EducationPageData = {
    certificates: Array<CertificateData>
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
