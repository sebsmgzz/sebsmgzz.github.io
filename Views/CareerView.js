
/** @class Represents the career view. */
class CareerView {

    //#region Static fields

    /** @field The number of CareerViews spanned, used to achieve different accordion ids. */
    static _spansCount = 0;

    /** @field The default id of the accordion. */
    static _defaultAccordionId = 'careerAccordion';

    /** @field The default id of the card header id. */
    static _defaultCardHeaderId = 'careerAccordionCardHeader';

    /** @field The default id of the card body id. */
    static _defaultCardBodyId = 'careerAccordionCardBody';

    //#endregion

    //#region Instance fields

    /** @field {CareerController} - Controls interactions between the view and the corresponding models. */
    _controller = new CareerController();

    /** @field {string} - The Id of this particular accordion object.*/
    _accordionId = CareerView._defaultAccordionId + CareerView._spansCount;

    //#endregion

    //#region Constructor

    constructor() {
        CareerView._spansCount += 1;
    }

    //#endregion

    //#region IView

    /** @inheritdoc */
    getView() {
        return (`
            <div
                id=${this._accordionId}
                class='accordion' >
                ${this._getExperiencesComponent()}
            </div>
        `);
    }
    
    //#endregion

    //#region Methods

    /** Setups the element of an accordion experience card.
     * @return {HTMLElement} The element representing the accordion experience.
     */
    _getExperiencesComponent() {
        let component = '';
        for(let i = 0; i < this._controller.experiencesCount; i++) {
            this._controller.scope(i);
            component += (`
                <div class='card'>
                    <div
                        id='${CareerView._defaultCardHeaderId + i}'
                        class='card-header' >
                        <h2 class='mb-0'></h2>
                        <a
                            target='_blank'
                            class='col-fluid'
                            href='${this._controller.organizationPath}' >
                            <img
                                class='d-block mx-auto' 
                                alt='${this._controller.imageText}'
                                src='${this._controller.imagePath}' />
                        </a>
                        <a 
                            class='col btn btn-link btn-block'
                            type='button'
                            data-toggle='collapse'
                            data-target='${'#' + CareerView._defaultCardBodyId + i}'
                            aria-expanded='true'
                            aria-controls='${CareerView._defaultCardBodyId + i}' >
                            <h5 class='card-title'>
                                ${this._controller.position}
                            </h5>
                            <h6 class='card-subtitle mb-2 text-muted'>
                                ${this._controller.organizationName}
                            </h6>
                            <small class='text-muted'>
                                ${CareerView.formatDate(this._controller.startingDate)} - 
                                ${CareerView.formatDate(this._controller.endingDate)}
                            </small>
                        </a>
                    </div>
                    <div
                        id='${CareerView._defaultCardBodyId + i}'
                        class='collapse'
                        aria-labelledby='#'
                        data-parent='${'#' + this._accordionId}' >
                        <div class='card-body'>
                            ${this._controller.description}
                        </div>
                    </div>
                </div>
            `);
        }
        return component;
    }

    /** Formats a date to be visible attractive.
     * @param date The date to give format.
     */
    static formatDate(date) {
        return `${Utilities.getMonthName(date.getMonth())} ${date.getFullYear()}`;
    }

    //#endregion

}