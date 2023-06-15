/*
===========================================
; Title:  calorie-convert.js
; Author: Nolan Berryhill
; Date:   18 June 2023
; Description: Applying strings to list in html
;==========================================
*/

//Import the FoodModel class
import { FoodModel } from './food-model.js';

// Static data for food items
FoodModel.data = [
    new FoodModel(1007, 'Egg', 78),
    new FoodModel(1008, 'Apple', 95),
    new FoodModel(1009, 'Hamburger', 354),
    new FoodModel(1010, 'Fries', 400),
    new FoodModel(1011, 'Banana', 105),
    new FoodModel(1012, 'Soda', 150)
];

// Define the CalorieConverter class
export class CalorieConverter {
    static find(name) {
        const lowerCaseName = name.toLowerCase();
        return FoodModel.data.filter(food => food.name.toLowerCase() === lowerCaseName);
    }
}

// Get the elements from the DOM
const txtFoodItemE1 = document.getElementById('txtFoodItem');
const btnSearch = document.getElementById('btnSearch');
const foodList = document.getElementById('foodList');

// Register an onclick event for the btnSearch button
btnSearch.onclick = function() {
    // Get the value from the input field
    const foodItem = txtFoodItemE1.value;

    // Call the find function from the CalorieConverter class
    const foods = CalorieConverter.find(foodItem);

    // Build the HTML string for the food list
    let foodListData = '<table class="food-table>';
    foodListData += '<tr>';
    foodListData += '<th>Name</th>';
    foodListData += '<th>Calories</th>';
    foodListData += '</tr>';
    for (const food of foods) {
        foodListData += '<tr>';
        foodListData += `<td class="food-name">${food.name}</td>`;
        foodListData += `<td class="food-calories">${food.calories}</td>`;
        foodListData += '</tr>';
    }
    foodListData += '</table>';

    // Update the foodList element with the HTML string
    foodList.innerHTML = foodListData;
};

