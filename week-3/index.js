/*
===========================================
; Title:  index.js
; Author: Nolan Berryhill
; Date:   11 June 2023
; Description: Applying strings to list in html
;==========================================
*/

// Import information from the below
import { Beverage } from './beverage.js';
import { Appetizer } from './appetizer.js';
import { MainCourse } from './main-course.js';
import { Dessert } from './dessert.js';
import { Bill } from './bill.js';

// Export information from the below
export { Beverage };
export { Appetizer };
export { MainCourse };
export { Dessert };
export { Bill };

// Import information to created a function
document.getElementById('btnOrder').onclick = function() {
    
    // Give a variable a value
    const bill = new Bill();

    // Give a variable a value
    const beverageInputs = document.querySelectorAll('.beverages-section input[type="checkbox"]');
    
    // Creating function
    for (const input of beverageInputs) {
        if(input.checked) {
            const name = input.name;
            const price = parseFloat(input.value);
            const beverage = new Beverage(name, price);
            bill.addBeverage(beverage);
        }
    }

    // Give a variable a value
    const appetizerInputs = document.querySelectorAll('.appetizers-section input[type="checkbox"]');

    // Creating function
    for (const input of appetizerInputs) {
        if (input.checked) {
            const name = input.name;
            const price = parseFloat(input.value);
            const appetizer = new Appetizer(name, price);
            bill.addAppetizer(appetizer);
        }
    }

    // Give a variable a value
    const mainCourseInputs = document.querySelectorAll('.main-courses-section input[type="checkbox"]');

    // Creating function
    for (const input of mainCourseInputs) {
        if (input.checked) {
            const name = input.name;
            const price = parseFloat(input.value);
            const mainCourse = new MainCourse(name, price);
            bill.addMainCourse(mainCourse);
        }
    }

    // Give a variable a value
    const dessertInputs = document.querySelectorAll('.desserts-section input[type="checkbox"]');

    // Creating function
    for (const input of dessertInputs) {
        if (input.checked) {
            const name = input.name;
            const price = parseFloat(input.value);
            const dessert = new Dessert(name, price);
            bill.addDessert(dessert);
        }
    }

    // Give a variable a value
    const orderTotalDiv = document.getElementById('order-total');
    const total = bill.getTotal();
    orderTotalDiv.textContent = `Your order total is $${total}`;
};