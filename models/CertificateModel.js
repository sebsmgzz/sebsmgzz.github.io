/*
    <summary>
        Represents an educational certificate
    </summary>
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