
/** @class Represents the contact view. */ 
class ContactView {

    //#region Static fields

    static _spansCount = 0;
    static _defaultCarouselId = 'contactCarousel';

    //#endregion

    //#region Instance fields
    
    _controller = new ContactController();

    _carouselId = ContactView._defaultCarouselId + ContactView._spansCount;

    //#endregion

    //#region Constructor

    constructor() {
        ContactView._spansCount += 1;
    }

    //#endregion

    //#region IView

    getView() {
        return(`
            <div
                id='${this._carouselId}'
                class='carousel slide'
                data-ride='carousel'>
                <div class='carousel-inner'>
                    ${this._getAllContactsComponent()}
                </div>
                <ol class='carousel-indicators'>
                ${this._getAllIndicatorsComponent()}
                </ol>
                ${this._getPreviousControl()}
                ${this._getNextControl()}
            </div>
        `);
    }
    
    //#endregion

    //#region Methods

    _getAllContactsComponent() {
        let component = '';
        for(let i = 0; i < this._controller.dataCount; i++) {
            this._controller.scope(i);
            component += (`
            <div class='carousel-item ${(i == 0)? 'active' : ''}' >
                <div class='carousel-caption d-md-block'>
                    <h5>${this._controller.title}</h5>
                    <p>${this._controller.content}</p>
                    <a href='${this._controller.reference}' target='_blank'>
                        <img
                        src=${this._controller.imagePath}
                        alt=${this._controller.imageText} />
                    </a>
                </div>
            </div>
        `);
        }
        return component;
    }

    _getAllIndicatorsComponent() {
        let component = '';
        for(let i = 0; i < this._controller.dataCount; i++) {
            this._controller.scope(i);
            component += (`
            <li
                data-target='#${this._carouselId}'
                data-slide-to='${i}'
                class='${(i == 0)? 'active' : ''}' >
            </li>
        `);
        }
        return component;
    }

    _getPreviousControl() {
        return (`
            <a
            class='carousel-control-prev'
            href='#${this._carouselId}'
            role='button' data-slide='prev' >
                <span class='carousel-control-prev-icon' aria-hidden='true'></span>
                <span class='sr-only'>Previous</span>
            </a>
        `);
    }

    _getNextControl() {
        return (`
            <a
            class='carousel-control-next'
            href='#${this._carouselId}'
            role='button'
            data-slide='next'>
                <span class='carousel-control-next-icon' aria-hidden='true'></span>
                <span class='sr-only'>Next</span>
            </a>
        `);
    }

    //#endregion

}