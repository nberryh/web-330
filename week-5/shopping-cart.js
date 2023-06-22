/*
===========================================
; Title:  shopping-cart.js
; Author: Nolan Berryhill
; Date:   25 June 2023
; Description: Applying strings to list in html
;==========================================
*/

class ShoppingCart {
    constructor() {
        this.product = [];
    }

    count() {
        return this.products.length;
    }

    add(product) {
        this.products.push(product);
    }

    *[Symbol.iterator]() {
        for (const product of this.products) {
            yield product;
        }
    }
}

export { ShoppingCart };