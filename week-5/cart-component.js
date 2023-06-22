/*
===========================================
; Title:  cart-component.js
; Author: Nolan Berryhill
; Date:   25 June 2023
; Description: Applying strings to list in html
;==========================================
*/

class CartComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = '<i class="fa fa-shopping-cart"></i>';
    }
}

customElements.define('cart-component', CartComponent);