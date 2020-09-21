import IView from '../Interfaces/IView';
import ContactController from '../Controllers/ContactController';
import * as NoReact from '../no-react';

/** @class Represents the contact view. */ 
export default class ContactView implements IView {

    //#region Static fields

    private static spansCount: number = 0;
    private static defaultCarouselId: string = "contactCarousel";

    private static get previousControl(): HTMLElement {
        return ( 
            <a class="carousel-control-prev" href="#contactCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
        ) as HTMLElement;
    }

    private static get nextControl(): HTMLElement {
        return (
            <a class="carousel-control-next" href="#contactCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        ) as HTMLElement;
    }

    //#endregion

    //#region Instance fields
    
    private readonly controller: ContactController = new ContactController();

    private readonly root: HTMLElement = (
        <div
            id={ContactView.defaultCarouselId + ContactView.spansCount}
            class="carousel slide"
            data-ride="carousel">
        </div>
    ) as HTMLElement;

    private readonly items: HTMLElement = (
        <div class="carousel-inner"></div>
    ) as HTMLElement;

    private readonly indicators: HTMLElement = (
        <ol class="carousel-indicators"></ol>
    ) as HTMLElement;

    //#endregion

    //#region Constructor

    public constructor() {
        ContactView.spansCount += 1;
        for(let i: number = 0; i < this.controller.count; i++) {
            this.controller.scope(i);
            this.items.appendChild(this.getScopedItem(i == 0));
            this.indicators.appendChild(this.getScopedIndicator(i == 0, i));
        }
        this.root.appendChild(this.root);
        this.root.appendChild(this.indicators);
        this.root.appendChild(ContactView.previousControl);
        this.root.appendChild(ContactView.nextControl);
    }

    //#endregion

    //#region Private methods

    private getScopedItem(active: boolean): HTMLElement {
        return (
            <div class={"carousel-item" + (active? "active" : "")}>
                <div class="carousel-caption d-md-block">
                    <h5>{this.controller.title}</h5>
                    <p>{this.controller.content}</p>
                    <a href={this.controller.reference} target="_blank">
                        <img
                        src={this.controller.imagePath}
                        alt={this.controller.imageText} />
                    </a>
                </div>
            </div>
        ) as HTMLElement;
    }

    private getScopedIndicator(active: boolean, slideToIndex: number): HTMLElement {
        return (
            <li
                data-target={"#" + this.root.id}
                data-slide-to={slideToIndex}
                class={(active)? "active" : ""}>
            </li>
        ) as HTMLElement;
    }

    //#endregion

    //#region IView

    public render(element: HTMLElement): void {
        element.appendChild(this.root);
    }
    
    //#endregion

}