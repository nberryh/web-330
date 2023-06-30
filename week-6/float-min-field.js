/*
===========================================
; Title:  float-min-field.js
; Author: Nolan Berryhill
; Date:   02 July 2023
; Description: Applying strings to list in html
;==========================================
*/

//Define the FloatMinField class and allows for export
export class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }

    validate() {
        const parsedField = parseFloat(this.field);
        return parsedField > this.min;
    }

    getMessage() {
        return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
    }
}