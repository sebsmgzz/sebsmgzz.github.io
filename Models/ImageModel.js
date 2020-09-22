
/** @class Represents an image. */
class ImageModel {

    //#region Properties

    /** @property {string} - The path of the image. */
    _path;
    get path() {
        return this._path;
    }
    set path(v) {
        this._path = v;
    }
    
    /** @property {string} - The alternative text of the image. */
    _text;
    get text() {
        return this._text;
    }
    set text(v) {
        this._text = v;
    }
 
    //#endregion

    //#region IModel

    get count() {
        return StoredProcedures.ImagesTableCount();
    }

    select(index) {
        let data = StoredProcedures.ImagesTableSelect(index);
        this.path = data.path;
        this.text = data.text;
    }

    //#endregion

}