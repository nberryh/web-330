/*
===========================================
; Title:  berryhill-palindrome.js
; Author: Nolan Berryhill
; Date:   04 June 2023
; Description: Applying strings to list in html
;==========================================
*/

// Function to get today's date wth the "en-US" parameter
function getTodaysDate() {
    return new Date().toLocaleDateString("en-US");
}

//Function to get the length of a string
function getLength(str) {
    return str.length;
}

// Function to reverse a string
function reverse(str) {
    return str.split("").reverse().join("");
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    return reverse(str) === str;
}

// Function for show results
function showResults() {

    // Assign values to variables
    var originalPhrase = document.getElementById("txtPhrase").value;
    var assignResults = document.getElementById("assign-results");
    var today = getTodaysDate();
    var len = getLength(originalPhrase);
    var reversedPhrase = reverse(originalPhrase);
    var header = `Today's Date: ${today}<br> Original Phrase: ${originalPhrase}<br>Reversed Phrase: ${reversedPhrase}<br>Phrase Length: ${len}<br>`;

    // Output for the answer to the question
    if (isPalindrome(originalPhrase.toLowerCase())) {
            assignResults.innerHTML = `${originalPhrase} <strong><u>is</u></strong> a palindrome`;
        } else {
            assignResults.innerHTML = `${originalPhrase} <strong><u>is</u></strong> not a palindrome`;
        }
    
        // Assign the header variable to the "assign-results-header" div
        document.getElementById("assign-results-header").innerHTML = header;
}