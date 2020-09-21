
export default interface IView {

    /** Renders the view as a child of the given element
     * @param element {HTMLElement} The parent to-be element of the view. 
     */
    render(element: HTMLElement): void;

}