
/** @class Provides usefull functions and properties for usage. */
class Utilities {

    /** @field The available pages in the document.  */
    static _pages = document.querySelectorAll("main > div");

    /** @field Keeps track of the index of the current page. */
    static _currentPageIndex = 0;

    /** @field Represents the month's name on a year. */
    static _months = [
        "",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    /**
     * Returns the name of the month with the given numeric representation.
     * @param index {number} The one-based of the month to return.
     * @returns {string} The name of the month.
     */
    static getMonthName(index) {
        return Utilities._months[index];
    }

    /**
     * Sets the current page.
     * @param index {number} The index of the page to activate.
     */
    static setCurrentPage(index) {
        Utilities._pages[index].classList.toggle("hidden-content");
        Utilities._pages[Utilities._currentPageIndex].classList.toggle("hidden-content");
        this._currentPageIndex = index;
    }

}