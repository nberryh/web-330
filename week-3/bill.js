/*
===========================================
; Title:  bill.js
; Author: Nolan Berryhill
; Date:   11 June 2023
; Description: Applying strings to list in html
;==========================================
*/

// Export information
export class Bill {
    constructor() {
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = [];
    }

    // Function for beverage
    addBeverage(beverage) {
        this._beverages.push(beverage);
    }

    // Function for appetizer
    addAppetizer(appetizer) {
        this._appetizers.push(appetizer);
    }

    // Function for main course
    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse);
    }

    // Function for dessert
    addDessert(dessert) {
        this._desserts.push(dessert);
    }

    // Function for getTotal
    getTotal() {
        let total = 0;
        [this._beverages, this._appetizers, this._mainCourses, this._desserts].forEach((arr) => {
            arr.forEach((item) => {
                total += parseFloat(item.price);
            });
        });
        return total.toFixed(2);
    }
}