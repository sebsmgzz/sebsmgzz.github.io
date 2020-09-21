import IView from '../Interfaces/IView';
import * as NoReact from '../no-react';

/** @class Represents the profile view. */
export default class ProfileView implements IView {

    //#region Static fields

    /** @field {HTMLElement} - The root element of the profile view. */
    private static readonly root: HTMLElement = (
        <div class="row jumbotron jumbotron-fluid">
            <div class="col-sm">
                <img
                    class="d-block mx-auto"
                    src="TODO: this"
                    alt="TODO: this" />
            </div>
            <div class="col-md title-text">
                <h1 class="display-4">
                    Sebastián Maroñas González
                </h1>
                <div class="col-md title-text">
                    <p class="lead">
                        Bachelor of Engineering in Mechanic Electrics
                    </p>
                    <p class="lead">
                        .NET developer
                    </p>
                </div>
            </div>
        </div>
    ) as HTMLElement;

    //#endregion

    //#region IView

    /** @inheritdoc */
    public render(element: HTMLElement): void {
        element.appendChild(ProfileView.root)
    }

    //#endregion

}