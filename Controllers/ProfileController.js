
/** @class Controls the interactions between the profile view and models. */
class ProfileController {

    //#region Fields

    /** @field {string} - The path to the profile image. */
    _imagePath = "public/images/me.png";

    /** @field {string} - The alternative text of the profile image. */
    _imageText = "This is me!";

    /** @field {string} - The name to display in the profile. */
    _name = "Sebastián Maroñas González";

    /** @field {string[]} - The list of titles. */
    _titles= [
        "Bachelor of Engineering in Mechanic Electrics",
        ".NET developer"
    ];

    //#endregion

    //#region Properties

    /** @property {string} - The path to the profile image. */
    get imagePath() {
        return this._imagePath;
    }

    /** @property {string} - The alternative text of the profile image. */
    get imageText() {
        return this._imageText;
    }

    /** @property {string} - The name of the profile. */
    get name() {
        return this._name;
    }

    /** @property {string} - The amount of titles. */
    get titlesCount() {
        return this._titles.length;
    }

    //#endregion

    //#region Methods

    /** Finds and returns the title with the given index.
     * @param index {number} The index of the wished title.
     * @returns {string} - The title.
     */
    getTitle(index) {
        return this._titles[index];
    }

    //#endregion

}