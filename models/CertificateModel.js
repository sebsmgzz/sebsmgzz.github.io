
/** @class Represents an educational certificate. */
class CertificateModel {

    //#region Properties

    /** @property {string} "" - The name of the certificate. */
    _name;
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    
    /** @property {Date} - The date the certificate was issued. */
    _date;
    get date() {
        return this._date;
    }
    set date(v) {
        this._date = v;
    }
    
    /** @property {string} - The path for the certificate's credential. */
    _path;
    get path() {
        return this._path;
    }
    set path(v) {
        this._path = v;
    }

    /** @property {number} - The index for the image. */
    _image_id;
    get image_id() {
        return this._image_id;
    }
    set image_id(v) {
        this._image_id = v;
    }
    
    /** @property {number[]} - A list of the indexes of the issuers of the credential. */
    _issuers_id;
    get issuers_id() {
        return this._issuers_id;
    }
    set issuers_id(v) {
        this._issuers_id = v;
    }

    //#endregion

    //#region IModel

    get count() {
        return StoredProcedures.CertificatesTableCount();
    }

    select(index) {
        let data = StoredProcedures.CertificatesTableSelect(index);
        this.name = data.name;
        this.date = data.date;
        this.image_id = data.image_id;
        this.path = data.path;
        this.issuers_id = data.issuers_id;
    }

    //#endregion

}