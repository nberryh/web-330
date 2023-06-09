/*
===========================================
; Title:  bill.js
; Author: Nolan Berryhill
; Date:   11 June 2023
; Description: Applying strings to list in html
;==========================================
*/

export class Bill {
    constructor() {
        this._beverages = [];
        this._appetizers = [];
        this._mainCourse = [];
        this._desserts = [];
    }

    addBeverage(beverage) {
        this._beverages.push(beverage);
    }

    addAppetizer(appetizer) {
        this._appetizers.push(appetizer);
    }

    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse);
    }

    addDessert(dessert) {
        this._desserts.push(dessert)
    }

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