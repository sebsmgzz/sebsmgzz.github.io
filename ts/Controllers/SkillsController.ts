import IController from '../Interfaces/IController';
import SkillModel from '../Models/SkillModel';
import ImageModel from '../Models/ImageModel';

/** @class Controls the interactions between the skills view and models. */
export default  class SkillsController implements IController {
    
    //#region Fields

    /** @field {SkillModel} The skill model of the control. */
    private skill: SkillModel;

    /** @field {ImageModel} The image model of the skill. */
    private image: ImageModel;

    //#endregion

    //#region Properties

    /** @property {string} - The path to the image of the scoped skill. */
    public get imagePath(): string {
        return this.image.path;
    }

    /** @property {string} - The alternative text of the image of the scoped skill.  */
    public get imageText(): string {
        return this.image.text;
    }

    /** @property {string} - The name of the scoped skill. */
    public get name(): string {
        return this.skill.name;
    }

    //#endregion

    //#region Contructor

    public constructor() {
        this.skill = new SkillModel();
        this.image = new ImageModel();
    }

    //#endregion

    //#region IController

    /** @inheritdoc */
    public get count(): number {
        return this.skill.count;
    }

    /** @inheritdoc */
    public scope(index: number): void {
        this.skill.select(index);
        this.image.select(this.skill.image_id);
    }
    
    //#endregion

}