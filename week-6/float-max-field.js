/*
===========================================
; Title:  float-max-field.js
; Author: Nolan Berryhill
; Date:   02 July 2023
; Description: Applying strings to list in html
;==========================================
*/

//Define the FloatMaxField class and allows for export
export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }

    validate() {
        const parsedField = parseFloat(this.field);
        return parsedField < this.max;
    }

    getMessage() {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
    }
}