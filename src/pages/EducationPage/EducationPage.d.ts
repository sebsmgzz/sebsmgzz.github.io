import { Certificate } from "apis/public/index.d";

export type EducationPageProps = {

}

export type EducationPageData = {
    certificates: Array<EducationPageCertificate>
}

export type EducationPageCertificate = Omit<Certificate, "issuers"> & {
    issuers: Array<EducationPageIssuer>
}

export type EducationPageIssuer = { 
    name: string,
    url: URL,
    imagePath: string
}
