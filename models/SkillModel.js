
/** @class Represents a skill. */
class SkillModel {

    //#region Properties

    /** @property {string} - The name representing the skill. */
    _name;
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    
    /** @property {string} - The description of the skill. */
    _description ;
    get description()  {
        return this._description;
    }
    set description(v ) {
        this._description = v;
    }
    
    /** @property {number} - The index of the image of the skill. */
    _image_id ;
    get image_id()  {
        return this._image_id;
    }
    set image_id(v ) {
        this._image_id = v;
    }
    
    //#endregion

    //#region IModel

    get count() {
        return StoredProcedures.SkillsTableCount();
    }

    select(index) {
        let data = StoredProcedures.SkillsTableSelect(index);
        this.name = data.name;
        this.description = data.description;
        this.image_id = data.image_id;
    }

    //#endregion

}