import IModel from '../Interfaces/IModel';
import IQueryable from '../Interfaces/IQueryable';
import Table from '../Tables/SkillsTable';

/** @class Represents a skill. */
export default class SkillModel implements IModel, IQueryable {

    //#region Properties

    /** @property {string} - The name representing the skill. */
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }
    
    /** @property {string} - The description of the skill. */
    private _description : string;
    public get description() : string {
        return this._description;
    }
    public set description(v : string) {
        this._description = v;
    }
    
    /** @property {number} - The index of the image of the skill. */
    private _image_id : number;
    public get image_id() : number {
        return this._image_id;
    }
    public set image_id(v : number) {
        this._image_id = v;
    }
    
    //#endregion

    //#region IModel

    public parse(data: any): void {
        this.name = data.name;
        this.description = data.description;
        this.image_id = data.image_id;
    }

    //#endregion

    //#region IQueryable

    public readonly count: number = Table.Count();

    public select(index: number): void {
        let data: any = Table.Select(index);
        this.parse(data);
    }

    //#endregion

}