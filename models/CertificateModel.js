/*
    <summary> Represents an educational certificate
    <name: String> The name of the certificate
    <dateIssued: String> The date the certificate was issued
    <logoPath: String> The logo of the certificate
    <logoText: String> The alternative text for the logo
    <credentialPath: String> The path for the certificate's credential
    <issuers: IssuerModel[]> A list of the issuers of the credential
*/
class CertificateModel {

    constructor() {
        this.name = "position";
        this.dateIssued = "company";
        this.logoPath = "#";
        this.logoText = "altText"
        this.credentialPath = "#";
        this.issuers = [
            {
                name: "issuerName",
                referencePath: "issuerReferencePath"
            }
        ];
    }

}