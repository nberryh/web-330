/*
===========================================
; Title:  theme.js
; Author: Nolan Berryhill
; Date:   25 June 2023
; Description: Applying strings to list in html
;==========================================
*/

//Function for setDefaultTheme
function setDefaultTheme() {

    //Assigns variables
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    //Assigns output to HTML
    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

//Function for setSelectedTheme
function setSelectedTheme() {
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}