
export default interface IController {

    /** @property {number} - The amount of experiences available for scoping */
    count: number;

    /**
     * Scopes the controller to the corresponding models index.
     * @param index {number} The index to scope to.
     */
    scope(index: number): void;

}