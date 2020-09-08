/*
    <summary> Represents a contact method
    <methodName: String> The name of the certificate
    <content: String> The information content for contact
    <reference: String> The referenced path for further information about the contact
    <imagePath: String> The path for the image representing the contact method
    <imageText: String> The alternative text for the image
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