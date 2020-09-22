
class SkillsController {
    
    //#region Fields

    /** @field {SkillModel} The skill model of the control. */
    _skill = new SkillModel();

    /** @field {ImageModel} The image model of the skill. */
    _image = new ImageModel();

    //#endregion

    //#region Properties

    /** @property {string} - The path to the image of the scoped skill. */
    get imagePath() {
        return this._image.path;
    }

    /** @property {string} - The alternative text of the image of the scoped skill.  */
    get imageText() {
        return this._image.text;
    }

    /** @property {string} - The name of the scoped skill. */
    get name() {
        return this._skill.name;
    }

    /** @property {number} - The number of skills to be scoped. */
    get skillsCount() {
        return this._skill.count;
    }

    //#endregion

    //#region Methods

    /** Selects a skill to focus on.
     * @param index {number} The index of the skill.
     */
    scope(index) {
        this._skill.select(index);
        this._image.select(this._skill.image_id);
    }
    
    //#endregion

}