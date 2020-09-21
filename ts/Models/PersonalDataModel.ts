import IModel from '../Interfaces/IModel';
import IQueryable from '../Interfaces/IQueryable';
import Table from '../Tables/PersonalDataTable';

/** @class Represents a personal data. */
export default class PersonalDataModel implements IModel, IQueryable {

    //#region Properties

    /** @property {string} - The title of the personal data. */
    private _title: string;
    public get title(): string {
        return this._title;
    }
    public set title(v: string) {
        this._title = v;
    }

    /** @property {string} - The content of the data. */
    private _content: string;
    public get content(): string {
        return this._content;
    }
    public set content(v: string) {
        this._content = v;
    }

    /** @property {string} - The path for reference. */
    private _path: string;
    public get path(): string {
        return this._path;
    }
    public set path(v: string) {
        this._path = v;
    }

    /** @property {number} - The index for the image representing the data. */
    private _image_id: number;
    public get image_id(): number {
        return this._image_id;
    }
    public set image_id(v: number) {
        this._image_id = v;
    }
    
    //#endregion

    //#region IModel
    
    public parse(data: any): void {
        this.title = data.title;
        this.content = data.content;
        this.path = data.path;
        this.image_id = data.image_id;
    }

    //#endregion

    //#region IQueryable

    public readonly count: number = Table.Count();

    public select(index: number): void {
        return Table.Select(index);
    }

    //#endregion

}