'use strict';

const userNameInput = prompt('Welcome to the site! What\'s your name?').toLowerCase();

// I found replace here: https://stackoverflow.com/questions/4993764/how-to-remove-numbers-from-a-string
// I read more about it on w3schools here: https://www.w3schools.com/jsref/jsref_replace.asp
// I played with it a bit and learned some of the basic functions, but the one I used I don't understand the command. I am still looking in to why it works.
// After getting in to Mozillas description (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), 
// reading about RegExp and then searching the actual term, I now understand it, but I'm in awe of the person who came up with it!

let userNameInProgress = userNameInput.replace(/\d+/g, '');

// read the tutorial on how to capitalize the first letter here: https://flexiple.com/javascript/javascript-capitalize-first-letter/

let userName = userNameInProgress.charAt(0).toUpperCase() + userNameInProgress.slice(1);

alert(`Hi ${userName}, welcome to the site! Let's play a game, answer the following question yes, no, y, or n.`);

function greetUser(userName) {
  document.write(`Hello ${userName}`);
}

function homeState() {
  let homeStateGuess = prompt('Am I from Colorado originally?').toLowerCase();
  if (homeStateGuess === 'n' || homeStateGuess ==='no') {
    alert('Wow, yes I am actually from California!');
    document.write('<span id="homeStateCorrect">California</span>');
  } else {
    document.write('<span id="homeStateWrong">California</span>');
  }
}

function currentState() {
  let currentStateGuess = prompt('Do I live in Washington Currently?').toLowerCase();
  if (currentStateGuess === 'n' || currentStateGuess ==='no') {
    alert('Wow, yes I am actually live in Virginia!');
    document.write('<span id="currentStateCorrect">Virginia</span>');
  } else {
    document.write('<span id="currentStateWrong">Virginia</span>');
  }
}

function favoriteShow() {
  let favoriteShowGuess = prompt('Am I a huge Star Trek fan?').toLowerCase();
  if (favoriteShowGuess === 'y' || favoriteShowGuess ==='yes') {
    alert('Yep! Total Trekkie!');
    document.write('<span id="nx01Correct">It\'s been a long road, geting from there to here.</span>');
  } else {
    document.write('<span id="nx01Wrong">It\'s been a long road, geting from there to here.</span>');
  }
}

function jobEstimate() {
  let jobEstimate = prompt('Was my job in Washinton Permanent?').toLowerCase();
  if (jobEstimate === 'n' || jobEstimate ==='no') {
    alert('Right! It was supposed to only be 3 weeks!');
    document.write('<span id="jobEstimateCorrect">3 weeks</span>');
  } else {
    document.write('<span id="jobEstimateWrong">3 weeks</span>');
  }
}

function jobLength() {
  let jobEstimate = prompt('Was my job in Washinton Permanent?').toLowerCase();
  if (jobEstimate === 'n' || jobEstimate ==='no') {
    alert('Right! It was supposed to only be 3 weeks!');
    document.write('<span id="jobEstimateCorrect">3 weeks</span>');
  } else {
    document.write('<span id="jobEstimateWrong">3 weeks</span>');
  }
}

