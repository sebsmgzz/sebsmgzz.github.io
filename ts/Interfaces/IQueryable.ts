
export default interface IQueryable {

    /** 
     * @property {number} - The amount of entries available.
     */
    count: number;

    /**
     * Selects an entry.
     * @param index The index of the entry to select.
     */
    select(index: number): void;

}