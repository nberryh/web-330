/*
===========================================
; Title:  required-field.js
; Author: Nolan Berryhill
; Date:   02 July 2023
; Description: Applying strings to list in html
;==========================================
*/

//Define the RequiredField class and allows for export
export class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    validate() {
        return Boolean(this.field);
    }

    getMessage() {
        return `${this.name} is s required field.`;
    }
}



