/*
===========================================
; Title:  main-course.js
; Author: Nolan Berryhill
; Date:   11 June 2023
; Description: Applying strings to list in html
;==========================================
*/

// Imports function from product
import { Product } from './product.js';

// Function for MainCourse

export class MainCourse extends Product {
    constructor(name, price) {
        super(name, price);
    }
}