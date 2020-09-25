
/** @class Represents a career experience. */
class ExperienceModel{

    //#region Properties

    /** @property {string} - The position hold during the experience. */
    _position;
    get position() {
        return this._position;
    }
    set position(v) {
        this._position = v;
    }

    /** @property {Date} - The date the experience started. */
    _startingDate;
    get startingDate() {
        return this._startingDate;
    }
    set startingDate(v) {
        this._startingDate = v;
    }

    /** @property {Date} - The date the experience ended. */
    _endingDate;
    get endingDate() {
        return this._endingDate;
    }
    set endingDate(v) {
        this._endingDate = v;
    }

    /** @property {number} - The index of the organization where the experience was obtained. */    
    _organization_id;
    get organization_id() {
        return this._organization_id;
    }
    set organization_id(v) {
        this._organization_id = v;
    }

    /** @property {string} - The description of the experience. */
    _description;
    get description() {
        return this._description;
    }
    set description(v) {
        this._description = v;
    }

    //#endregion

    //#region IModel

    get count() {
        return StoredProcedures.ExperiencesTableCount();
    }

    select(index) {
        let data = StoredProcedures.ExperiencesTableSelect(index);
        this.position = data.position;
        this.startingDate = data.startingDate;
        this.endingDate = data.endingDate;
        this.organization_id = data.organization_id;
        this.description = data.description;
    }

    //#endregion

}