/*
===========================================
; Title:  float-field.js
; Author: Nolan Berryhill
; Date:   02 July 2023
; Description: Applying strings to list in html
;==========================================
*/

//Define the FloatField class and allows for export
export class FloatField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    validate() {
        return !isNaN(parseFloat(this.field));
    }

    getMessage() {
        return `${this.name} must be a float value. You entered ${this.field}`;
    }
}