/*
===========================================
; Title:  shopping-cart.js
; Author: Nolan Berryhill
; Date:   25 June 2023
; Description: Applying strings to list in html
;==========================================
*/

//Define the Shopping Cart class
class ShoppingCart {
    constructor() {
        this.products = [];
    }

    //Define the class()
    count() {
        return this.products.length;
    }

    //Define how to add product
    add(product) {
        this.products.push(product);
    }

    //Define symbol iterator
    *[Symbol.iterator]() {
        for (let product of this.products) {
            yield product;
        }
    }
}

//Export ShoppingCart
export { ShoppingCart };