/*
===========================================
; Title:  index.js
; Author: Nolan Berryhill
; Date:   11 June 2023
; Description: Applying strings to list in html
;==========================================
*/

// Export information from the below
export { Product } from './product.js';
export { Beverage } from './beverage.js';
export { Appetizer } from './appetizer.js';
export { MainCourse } from './main-course.js';
export { Dessert } from './dessert.js';
export { Bill } from './bill.js';

document.getElementById('btnOrder').addEventListener('click', () => {
    const bill = new Bill();

    const beverageInputs = document.querySelectorAll('.beverages-section input[type="checkbox"]');
    for (const input of beverageInputs) {
        if(input.checked) {
            const name = input.name;
            const price = parseFloat(input.value);
            const beverage = new Beverage(name, price);
            bill.addBeverage(beverage);
        }
    }

    const appetizerInputs = document.querySelectorAll('.appetizers-section input[type="checkbox"]');
    for (const input of appetizerInputs) {
        if (input.checked) {
            const name = input.name;
            const price = parseFloat(input.value);
            const appetizer = new Appetizer(name, price);
            bill.addAppetizer(appetizer);
        }
    }

    const mainCourseInputs = document.querySelectorAll('.main-courses-section input[type="checkbox"]');
    for (const input of mainCourseInputs) {
        if (input.checked) {
            const name = input.name;
            const price = parseFloat(input.value);
            const mainCourse = new MainCourse(name, price);
            bill.addMainCourse(mainCourse);
        }
    }

    const dessertInputs = document.querySelectorAll('.dessert-section input[type="checkbox"]');
    for (const input of dessertInputs) {
        if (input.checked) {
            const name = input.name;
            const price = parseFloat(input.value);
            const dessert = new Dessert(name, price);
            bill.addDessert(dessert);
        }
    }

    const orderTotalDiv = document.getElementById('order-total');
    const total = bill.getTotal().toFixed(2);
    console.log('Order Total:', total);
    orderTotalDiv.textContent = `Your order total is $${total}`;
});