/**
*    @class Represents a contact method
*    @param methodName {String} The name of the certificate
*    @param content {String} The information content for contact
*    @param reference {String} The referenced path for further information about the contact
*    @param imagePath {String} The path for the image representing the contact method
*    @param imageText {String} The alternative text for the image
*/
class ContactMethodModel {

    constructor() {
        this.methodName = "methodName";
        this.content = "content";
        this.reference = "#";
        this.imagePath = "#"
        this.imageText = "imageText";
    }

}