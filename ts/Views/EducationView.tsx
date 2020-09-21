import IView from '../Interfaces/IView';
import EducationController from '../Controllers/EducationController';
import * as NoReact from '../no-react';

/** @class Represents the education view. */
export default class EducationView implements IView {

    //#region Static Fields

    /** @field The default root element for the issuers. */
    private static readonly defaultIssuersRoot: HTMLElement = (
        <p class="card-text">Issueres: </p>
    ) as HTMLElement;

    //#endregion

    //#region Fields

    /** @fields Controls the interactions between the education view and the corresponding models. */
    private readonly controller: EducationController;

    /** @field The root element of the view. */
    private root: HTMLElement = (
        <div class="card-deck row row-cols-1 row-cols-md-3"></div>
    ) as HTMLElement;

    //#endregion

    //#region Constructor

    public constructor() {
        this.controller = new EducationController();
        for(let i: number = 0; i < this.controller.count; i++) {
            this.controller.scope(i);
            let scopedIssuers: HTMLElement = EducationView.defaultIssuersRoot;
            for(let j: number = 0; j < this.controller.issuersCount; j++) {
                scopedIssuers.appendChild(this.getScopedIssuer(j));
            }
            this.root.appendChild(scopedIssuers);
        }
    }

    //#endregion

    //#region Methods

    /**
     * Setups the card element of the deck
     * @param issuersElement {HTMLElement} The issuers element to add to the card.
     * @return {HTMLElement} THe element containing the skill.
     */
    private getScopedCard(issuersElement: HTMLElement): HTMLElement {
        return (
            <div class="col my-2">
                <div class="card">
                    <img
                        src={this.controller.logoPath}
                        alt={this.controller.logoText} />
                    <div class="card-body">
                        <h5 class="card-title">
                            {this.controller.credentialName}
                        </h5>
                        <a href={this.controller.credentialPath} target="_blank" class="card-link">
                            View credential
                        </a>
                        {issuersElement}
                    </div>
                </div>
            </div>
        ) as HTMLElement;
    }

    /**
     * Setupds the issuers on scope.
     * @param index The index of the issuer to add.
     * @return {HTMLElement} THe element containing the issuer.
     */
    private getScopedIssuer(index: number): HTMLElement {
        return (
            <a href={this.controller.getIssuerReference(index)} target="_blank">
                {this.controller.getIssuerName(index)}
            </a>
        ) as HTMLElement;
    }
        
    //#endregion

    //#region IView

    render(element: HTMLElement): void {
        element.appendChild(this.root);
    }

    //#endregion

}