import IView from '../Interfaces/IView';
import SkillsController from '../Controllers/SkillsController';
import * as NoReact from '../no-react';

/** @class Represents the skills view. */
export default class SkillsView implements IView {

    //#region Fields

    /** @field {SkillsController} - The controller of the view with the models. */
    private readonly controller: SkillsController;

    /** @field {HTMLElement} -  The root element of the view. */
    private readonly root: HTMLElement = (
        <ul class="list-group"></ul>
    ) as HTMLElement;

    //#endregion

    //#region Contructor

    public constructor() {
        this.controller = new SkillsController();
        for(let i: number = 0; i < this.controller.count; i++) {
            this.root.appendChild(this.getScopedSkill());
        }
    }
    
    //#endregion

    //#region Methods

    /** Setups the scoped skill element
     * @returns {HTMLElement} The element containing skill.
     */
    private getScopedSkill(): HTMLElement {
        return (
            <li class="list-group-item">
                <img
                    src={this.controller.imagePath}
                    alt={this.controller.imageText} />
                <span class="align-middle">
                    {this.controller.name}
                </span>
            </li>
        ) as HTMLElement;
    }

    //#endregion

    //#region IView

    /** @inheritdoc */
    public render(element: HTMLElement): void {
        element.appendChild(this.root);
    }

    //#endregion

}