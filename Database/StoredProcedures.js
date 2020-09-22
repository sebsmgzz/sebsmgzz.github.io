
/** @class Offers methods to retrieve information from the database. */
class StoredProcedures {

    //#region Certificates Table

    static CertificatesTableSelect(index) {
        return certificates[index];
    }
    
    static CertificatesTableCount() {
        return certificates.length;
    }

    //#endregion

    //#region Experiences Table

    static ExperiencesTableSelect(index) {
        return experiences[index];
    }
    
    static ExperiencesTableCount() {
        return experiences.length;
    }

    //#endregion

    //#region Personal Data table

    static  PersonalDataTableSelect(index) {
        return personalData[index];
    }
    
    static PersonalDataTableCount() {
        return personalData.length;
    }

    //#endregion

    //#region Organizations Table
    
    static OrganizationsTableSelect(index) {
        return organizations[index];
    }

    static OrganizationsTableCount() {
        return organizations.length;
    }

    //#endregion

    //#region Images Table

    static ImagesTableSelect(index) {
        return images[index];
    }
    
    static ImagesTableCount() {
        return images.length;
    }

    //#endregion

    //#region Skills Table

    static SkillsTableSelect(index) {
        return skills[index];
    }
    
    static SkillsTableCount() {
        return skills.length;
    }

    //#endregion
       
}

