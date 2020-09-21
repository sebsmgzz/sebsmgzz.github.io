import IModel from '../Interfaces/IModel';
import IQueryable from '../Interfaces/IQueryable';
import Table from '../Tables/OrganizationsTable';

/** @class Represents an organization. */
export default class OrganizationModel implements IModel, IQueryable {

    //#region Properties

    /** @property {string} - The name of the organization. */
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }

    /** @property {string} - A reference path for more information about the organization. */
    private _path: string;
    public get path(): string {
        return this._path;
    }
    public set path(v: string) {
        this._path = v;
    }
    
    /** @property {number} - The index of the image realted to the organization. */
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
        this.path = data.path;
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