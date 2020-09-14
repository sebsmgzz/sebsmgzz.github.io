/**
*   @class Represents an educational certificate
*   @param name {String} The name of the certificate
*   @param dateIssued {String} The date the certificate was issued
*   @param logoPath {String} The logo of the certificate
*   @param logoText {String} The alternative text for the logo
*   @param credentialPath {String} The path for the certificate's credential
*   @param issuers {IssuerModel[]} A list of the issuers of the credential
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