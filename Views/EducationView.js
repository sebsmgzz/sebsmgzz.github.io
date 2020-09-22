
/** @class Represents the education view. */
class EducationView{

    //#region Fields

    /** @fields Controls the interactions between the education view and the corresponding models. */
    _controller = new EducationController();

    //#endregion

    //#region IView

    /** @inheritdoc */
    getView() {
        return (`
            <div class='card-deckrow row row-cols-1 row-cols-md-3' >
                ${this._getCertificatesComponent()}
            </div>
        `);
    }

    //#endregion

    //#region Methods

    /** Gets alls the certificates component.
     * @returns {string} The credentials component ready for rendering.
    */
    _getCertificatesComponent() {
        let component = '';
        for(let i = 0; i < this._controller.certificatesCount; i++) {
            this._controller.scope(i);
            component += (`
                <div class='col my-2'>
                    <div class='card'>
                        <img
                            src='${this._controller.logoPath}'
                            alt='${this._controller.logoText}' />
                        <div class='card-body'>
                            <h5 class='card-title'>
                                ${this._controller.credentialName}
                            </h5>
                            <a
                                href='${this._controller.credentialPath}'
                                target='_blank'
                                class='card-link'>
                                View credential
                            </a>
                            <p
                                class='card-text' >
                                Issueres:
                                ${this._getIssuersComponent()}
                            </p>
                        </div>
                    </div>
                </div>
            `);
        }
        return component;
    }

    /** Gets the issuers component for the current certificate.
     * @returns {string} The issuers component ready for rendering.
    */
    _getIssuersComponent() {
        let component = '';
        for(let i = 0; i < this._controller.issuersCount; i++) {
            component += (`
                <a
                    href='${this._controller.getIssuerReference(i)}'
                    target='_blank'>
                    ${this._controller.getIssuerName(i)}
                </a>
            `);
        }
        return component;
    }

    //#endregion

}