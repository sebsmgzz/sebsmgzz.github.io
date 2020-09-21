import IModel from '../Interfaces/IModel';
import IQueryable from '../Interfaces/IQueryable';
import Table from '../Tables/CertificatesTable';

/** @class Represents an educational certificate. */
export default class CertificateModel implements IModel, IQueryable {

    //#region Properties

    /** @property {string} "" - The name of the certificate. */
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }
    
    /** @property {Date} - The date the certificate was issued. */
    private _date: Date;
    public get date(): Date {
        return this._date;
    }
    public set date(v: Date) {
        this._date = v;
    }
    
    /** @property {string} - The path for the certificate's credential. */
    private _path: string;
    public get path(): string {
        return this._path;
    }
    public set path(v: string) {
        this._path = v;
    }

    /** @property {number} - The index for the image. */
    private _image_id: number;
    public get image_id(): number {
        return this._image_id;
    }
    public set image_id(v: number) {
        this._image_id = v;
    }
    
    /** @property {number[]} - A list of the indexes of the issuers of the credential. */
    private _issuers_id: number[];
    public get issuers_id(): number[] {
        return this._issuers_id;
    }
    public set issuers_id(v: number[]) {
        this._issuers_id = v;
    }

    //#endregion

    //#region IModel

    public parse(data: any): void {
        this.name = data.name;
        this.date = data.date;
        this.image_id = data.image_id;
        this.path = data.path;
        this.issuers_id = data.issuers_id;
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