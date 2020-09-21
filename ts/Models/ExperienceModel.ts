import IModel from '../Interfaces/IModel';
import IQueryable from '../Interfaces/IQueryable';
import Table from '../Tables/ExperiencesTable';

/** @class Represents a career experience. */
export default class ExperienceModel implements IModel, IQueryable {

    //#region Properties

    /** @property {string} - The position hold during the experience. */
    private _position: string;
    public get position(): string {
        return this._position;
    }
    public set position(v: string) {
        this._position = v;
    }

    /** @property {Date} - The date the experience started. */
    private _startingDate: Date;
    public get startingDate(): Date {
        return this._startingDate;
    }
    public set startingDate(v: Date) {
        this._startingDate = v;
    }

    /** @property {Date} - The date the experience ended. */
    private _endingDate: Date;
    public get endingDate(): Date {
        return this._endingDate;
    }
    public set endingDate(v: Date) {
        this._endingDate = v;
    }

    /** @property {number} - The index of the organization where the experience was obtained. */    
    private _organization_id: number;
    public get organization_id(): number {
        return this._organization_id;
    }
    public set organization_id(v: number) {
        this._organization_id = v;
    }

    /** @property {string} - The description of the experience. */
    private _description: string;
    public get description(): string {
        return this._description;
    }
    public set description(v: string) {
        this._description = v;
    }

    //#endregion

    //#region IModel

    public parse(data: any): void {
        this.position = data.position;
        this.startingDate = data.startingDate;
        this.endingDate = data.endingDate;
        this.organization_id = data.organization_id;
        this.description = data.description;
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