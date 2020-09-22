
/** @class Represents a personal data. */
class PersonalDataModel  {

    //#region Properties

    /** @property {string} - The title of the personal data. */
    _title;
    get title() {
        return this._title;
    }
    set title(v) {
        this._title = v;
    }

    /** @property {string} - The content of the data. */
    _content;
    get content() {
        return this._content;
    }
    set content(v) {
        this._content = v;
    }

    /** @property {string} - The path for reference. */
    _path;
    get path() {
        return this._path;
    }
    set path(v) {
        this._path = v;
    }

    /** @property {number} - The index for the image representing the data. */
    _image_id;
    get image_id() {
        return this._image_id;
    }
    set image_id(v) {
        this._image_id = v;
    }
    
    //#endregion

    //#region Imodel

    get count() {
        return StoredProcedures.PersonalDataTableCount();
    }

    select(index) {
        let data = StoredProcedures.PersonalDataTableSelect(index);
        this.title = data.title;
        this.content = data.content;
        this.path = data.path;
        this.image_id = data.image_id;
    }

    //#endregion

}