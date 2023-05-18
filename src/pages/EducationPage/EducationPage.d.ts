export { Certificate, Organization } from "apis/data.d";

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
    refUrl: URL,
    imagePath: string
}
