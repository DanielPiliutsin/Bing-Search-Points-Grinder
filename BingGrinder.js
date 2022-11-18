// ==UserScript==
// @name         Bing Grinder
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  A Userscript That Quickly Grinds The 50 Searches For Bing Points
// @author       Github.com/DanielPiliu
// @match        https://www.bing.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @grant        none
// ==/UserScript==

(window.onload = function() {
    'use strict';
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
document.getElementById("sb_form_q").value = generateString(10);
document.querySelector("input[type='submit']").click()
})();
