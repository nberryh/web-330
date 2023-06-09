/*
===========================================
; Title:  appetizer.js
; Author: Nolan Berryhill
; Date:   11 June 2023
; Description: Applying strings to list in html
;==========================================
*/

// Imports function from product

import { Product } from './product.js';

// Function for Appetizer

export class Appetizer extends Product {
    constructor(name, price) {
        super(name, price);
    }
}