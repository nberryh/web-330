/*
===========================================
; Title:  berryhill-palindrome.js
; Author: Nolan Berryhill
; Date:   04 June 2023
; Description: Applying strings to list in html
;==========================================
*/

function getTodaysDate() {
    return new Date().toLocaleDateString("en-US");
}
function getLength(str) {
    return str.length;
}
function reverse(str) {
    return str.split("").reverse().join("");
}
function isPalindrome(str) {
    return reverse(str) === str;
}
function showResults() {
    var txtPhrase = document.getElementById("txtPhrase").value;
    var assignResults = document.getElementById("assign-results");
    var today = getTodaysDate();
    var len = getLength(txtPhrase);
    var reversedPhrase = reverse(txtPhrase);
    var header = `Today's Date: ${today}<br>Phrase Length: ${len}<br>Reversed Phrase: ${reversedPhrase}`;
}