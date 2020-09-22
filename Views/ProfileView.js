
/** @class Represents the profile view. */
class ProfileView {

    //#region Instance fields

    /** @field {ProfieleController} - Controls the data the view to display. */
    _controller = new ProfileController();

    //#endregion

    //#region IView

    /** @inheritdoc */
    getView() {
        return (`
            <div class='row jumbotron jumbotron-fluid'>
                <div class='col-sm'>
                    <img
                        class='d-block mx-auto'
                        src='${this._controller.imagePath}'
                        alt='${this._controller.imageText}' />
                </div>
                <div class='col-md title-text'>
                    <h1 class='display-4'>
                        ${this._controller.name}
                    </h1>
                    <div class='col-md title-text'>
                        ${this._getTitlesComponent()}
                    </div>
                </div>
            </div>
        `);
    }

    //#endregion

    //#region Methods

    /** Gets the titles component.
     * @returns {string} The titles component ready for rendering.
    */
    _getTitlesComponent() {
        let component = "";
        for(let i = 0; i < this._controller.titlesCount; i++) {
            component += (`
                <p class='lead'>
                    ${this._controller.getTitle(i)}
                </p>
            `);
        }
        return component;
    }

    //#endregion

}