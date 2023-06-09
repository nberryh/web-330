/*
===========================================
; Title:  beverage.js
; Author: Nolan Berryhill
; Date:   11 June 2023
; Description: Applying strings to list in html
;==========================================
*/

//Imports code from product
import { Product } from './product.js';

// Function for Beverage
export class Beverage extends Product {
    constructor(name, product) {
        super(name, product)
    }
}