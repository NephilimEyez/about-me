'use strict';

const userNameInput = prompt('Welcome to the site! What\'s your name?').toLowerCase();

// I found replace here: https://stackoverflow.com/questions/4993764/how-to-remove-numbers-from-a-string
// I read more about it on w3schools here: https://www.w3schools.com/jsref/jsref_replace.asp
// I played with it a bit and learned some of the basic functions, but the one I used I don't understand the command. I am still looking in to why it works.
// After getting in to Mozillas description (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), reading about RegExp and then searching the actual term, I now understand it, but I'm in awe of the person who came up with it!

let userNameInProgress = userNameInput.replace(/\d+/g, '');

// read the tutorial on how to capitalize the first letter here: https://flexiple.com/javascript/javascript-capitalize-first-letter/

let userName = userNameInProgress.charAt(0).toUpperCase() + userNameInProgress.slice(1);

alert(`Hi ${userName}, welcome to the site!`);

