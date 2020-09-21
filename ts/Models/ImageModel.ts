import IModel from '../Interfaces/IModel';
import IQueryable from '../Interfaces/IQueryable';
import Table from '../Tables/ImagesTable';

/** @class Represents an image. */
export default class ImageModel implements IModel, IQueryable {

    //#region Properties

    /** @property {string} - The path to the image. */
    private _path : string;
    public get path() : string {
        return this._path;
    }
    public set path(v : string) {
        this._path = v;
    }

    /** @property {string} - The alternative text of the image. */
    private _text : string;
    public get text() : string {
        return this._text;
    }
    public set text(v : string) {
        this._text = v;
    }
    
    //#endregion

    //#region IModel

    public parse(data: any): void {
        this.path = data.path;
        this.text = data.text;
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