import IView from '../Interfaces/IView';
import CareerController from '../Controllers/CareerController';
import Utilities from '../public/Utilities';
import * as NoReact from '../no-react';

/** @class Represents the career view. */
export default class CareerView implements IView {

    //#region Static fields

    /** @field The number of CareerViews spanned, used to achieve different ids. */
    private static spansCount: number = 0;

    /** @field The default id of the accordion. */
    private static defaultAccordionId: string = "careerAccordion";

    /** @field The default id of the card header id. */
    private static defaultCardHeaderId: string = "careerAccordionCardHeader";

    /** @field The default id of the card body id. */
    private static defaultCardBodyId: string = "careerAccordionCardBody";

    //#endregion

    //#region Instance fields

    /** @field Controls interactions between the view and the corresponding models. */
    private controller: CareerController = new CareerController();

    /** The root element of the view. */
    public readonly root: HTMLElement = (
        <div
            id={CareerView.defaultAccordionId + CareerView.spansCount}
            class="accordion" ></div>
    ) as HTMLElement;

    //#endregion

    //#region Constructor

    public constructor() {
        CareerView.spansCount += 1;
        for(let i: number = 0; i < this.controller.count; i++) {
            this.controller.scope(i);
            let card = this.getScopedAccordionCard(i);
            this.root.append(card);
        }
    }

    //#endregion

    //#region Private methods

    /**
     * Formats a date to be visible attractive.
     * @param date The date to give format.
     */
    private static formatDate(date: Date): string {
        return `${Utilities.getMonthName(date.getMonth())} ${date.getFullYear()}`;
    }

    /**
     * Setups the element of an accordion card.
     * @param i {number} The index of the card being added.
     * @return {HTMLElement} The element representing the accordion card.
     */
    private getScopedAccordionCard(i: number): HTMLElement { 
        return(
            <div class="card">
                <div
                    id={CareerView.defaultCardHeaderId + i}
                    class="card-header" >
                    <h2 class="mb-0"></h2>
                    <a
                        target="_blank"
                        class="col-fluid"
                        href={this.controller.organizationPath}>
                        <img
                            class="d-block mx-auto" 
                            alt={this.controller.imageText}
                            src={this.controller.imagePath} />
                    </a>
                    <a 
                        class="col btn btn-link btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target={'#' + CareerView.defaultCardBodyId + i}
                        aria-expanded="true"
                        aria-controls={CareerView.defaultCardBodyId + i}>
                        <h5 class="card-title">
                            {this.controller.position}
                        </h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            {this.controller.organizationName}
                        </h6>
                        <small class="text-muted">
                            {CareerView.formatDate(this.controller.startingDate)} - 
                            {CareerView.formatDate(this.controller.endingDate)}
                        </small>
                    </a>
                </div>
                <div
                    id={CareerView.defaultCardBodyId + i}
                    class="collapse"
                    aria-labelledby="#"
                    data-parent={"#" + this.root.id}>
                    <div class="card-body">
                        {this.controller.description}
                    </div>
                </div>
            </div>
        ) as HTMLElement;
    }

    //#endregion

    //#region IView

    public render(element: HTMLElement): void {
        element.appendChild(this.root);
    }
    
    //#endregion

}