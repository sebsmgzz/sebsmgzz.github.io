
export const getSingle = function<T>(array: Array<T>) {
    if (array.length < 1) {
        throw new Error("Expected the array to have a single element, but none where found.");
    } else if (array.length > 1) {
        throw new Error("Expected the array to have a single element, but too many where found")
    } else {
        return array[0];
    }
}
