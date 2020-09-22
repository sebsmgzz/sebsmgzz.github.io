
/** @class Represents the skills view. */
class SkillsView {

    //#region Fields

    /** @field {SkillsController} - The controller of the view with the models. */
    controller = new SkillsController();

    //#endregion

    //#region IView

    /** @inheritdoc */
    getView() {
        return (`
            <ul class='list-group'>
                ${this._getSkillsComponent()}
            </ul>
        `);
    }

    //#endregion

    //#region Methods

    /** Setups the scoped skill element
     * @returns {HTMLElement} The element containing skill.
     */
    _getSkillsComponent() {
        let component = '';
        for(let i = 0; i < this.controller.skillsCount; i++) {
            this.controller.scope(i);
            component += (`
                <li class='list-group-item'>
                    <img
                        src='${this.controller.imagePath}'
                        alt='${this.controller.imageText}' />
                    <span class='align-middle'>
                        ${this.controller.name}
                    </span>
                </li>
            `);
        }
        return component;
    }

    //#endregion

}