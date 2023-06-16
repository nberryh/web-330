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

const selectedFoods = [];

// Register an onclick event for the btnSearch button
btnSearch.onclick = function() {
    // Get the value from the input field
    const foodItem = txtFoodItemE1.value;

    // Call the find function from the CalorieConverter class
    const foods = CalorieConverter.find(foodItem);

    selectedFoods.push(...foods);

    const foodListData = generateFoodTable(selectedFoods);

    foodList.innerHTML = foodListData;

};

    // Build the HTML string for the food list
function generateFoodTable(foods) {
    let foodListData = '<table>';
    foodListData += '<tr><th>Name</th><th>Calories</th></tr>';

    let count = 0;

    for (const food of foods) {
        foodListData += '<tr>';
        foodListData += `<td>${food.name}</td>`;
        foodListData += `<td>${food.calories}</td>`;
        foodListData += '</tr>';
    }

    foodListData += '</table>';

    // Update the foodList element with the HTML string
    return foodListData;
};

