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
    var originalPhrase = document.getElementById("txtPhrase").value;
    var assignResults = document.getElementById("assign-results");
    var today = getTodaysDate();
    var len = getLength(originalPhrase);
    var reversedPhrase = reverse(originalPhrase);
    var header = `Today's Date: ${today}<br> Original Phrase: ${originalPhrase}<br>Reversed Phrase: ${reversedPhrase}<br>Phrase Length: ${len}<br>`;

    if (isPalindrome(originalPhrase.toLowerCase())) {
            assignResults.innerHTML = `${originalPhrase} <strong><u>is</u></strong> a palindrome`;
        } else {
            assignResults.innerHTML = `${originalPhrase} <strong><u>is</u></strong> a palindrome`;
        }
    
        document.getElementById("assign-results-header").innerHTML = header;
}