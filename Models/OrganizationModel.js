
/** @class Represents an organization. */
class OrganizationModel {

    //#region Properties

    /** @property {string} - The name of the organization. */
    _name;
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }

    /** @property {string} - A reference path for more information about the organization. */
    _path;
    get path() {
        return this._path;
    }
    set path(v) {
        this._path = v;
    }
    
    /** @property {number} - The index of the image realted to the organization. */
    _image_id ;
    get image_id()  {
        return this._image_id;
    }
    set image_id(v ) {
        this._image_id = v;
    }
    
    //#endregion

    //#region IQueryable

    get count() { 
        return StoredProcedures.OrganizationsTableCount();
    }

    select(index) {
        let data = StoredProcedures.OrganizationsTableSelect(index);
        this.name = data.name;
        this.path = data.path;
        this.image_id = data.image_id;
    }

    //#endregion

}