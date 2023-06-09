/*
===========================================
; Title:  dessert.js
; Author: Nolan Berryhill
; Date:   11 June 2023
; Description: Applying strings to list in html
;==========================================
*/

// Imports functions from Product

import { Product } from './products.js'

// Function for Dessert
export class Dessert extends Product {
    constructor(name, price) {
        super(name, price);
    }
}