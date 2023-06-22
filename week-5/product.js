/*
===========================================
; Title:  product.js
; Author: Nolan Berryhill
; Date:   25 June 2023
; Description: Applying strings to list in html
;==========================================
*/

//Define the Product class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = this.generateRandomId();
    }

    generateRandomId() {
        //Generate a random number 1 and 1000
        const randomId = Math.floor(Math.random() * 1000) + 1;
        return randomId;
    }
}

//Export Product
export { Product };