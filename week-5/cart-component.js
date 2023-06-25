/*
===========================================
; Title:  cart-component.js
; Author: Nolan Berryhill
; Date:   25 June 2023
; Description: Applying strings to list in html
;==========================================
*/

//Define the CartComponent class
class CartComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = 
        `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
    }
}

//Export component
customElements.define('cart-component', CartComponent);