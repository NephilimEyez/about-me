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

let correctCounter = 0;

alert(`Hi ${userName}, welcome to the site! Let's play a game, answer the following question yes, no, y, or n.`);

let homeStateGuess = prompt('Am I from Colorado originally?').toLowerCase();
  if (homeStateGuess === 'n' || homeStateGuess ==='no') {
    alert('Wow, yes I am actually from California!');
    correctCounter++;
  } else {
    alert('Sorry! I\'m afraid I\'m from California.');
  }

function currentState() {
  let currentStateGuess = prompt('Do I live in Washington Currently?').toLowerCase();
  if (currentStateGuess === 'n' || currentStateGuess === 'no') {
    alert('Wow, yes I am actually live in Virginia!');
    correctCounter++;
  } else {
    alert('Sorry, no. I currently live in Virginia.');
  }
}

function favoriteShow() {
  let favoriteShowGuess = prompt('Am I a huge Star Trek fan?').toLowerCase();
  if (favoriteShowGuess === 'y' || favoriteShowGuess === 'yes') {
    alert('Yep! Total Trekkie!');
    correctCounter++;
  } else {
    alert('Sorry, huge Trekkie here!');
  }
}

function jobEstimate() {
  let jobEstimate = prompt('Was my job in Washinton Permanent?').toLowerCase();
  if (jobEstimate === 'n' || jobEstimate === 'no') {
    alert('Right! It was supposed to only be 3 weeks!');
    correctCounter++;
  } else {
    alert('I was in contract work, it was only slated for 3 weeks!');
  }
}

function jobLength() {
  let jobLength = prompt('Did my Washinton job end up lasting 4 years?').toLowerCase();
  if (jobLength === 'y' || jobLength === 'yes') {
    alert('Yep! 3 weeks turned in to 4 years!');
    correctCounter++;
  } else {
    alert('Actually yea, the job went from 3 weeks to 4 years.');
  }
}

for (let i = 0; i < 4; i++) {
  let favNumGuess = prompt(`${userName}, can you guess my favorite number? Try: ${i + 1} out of 4`);
  let favNumCleaned = Number(favNumGuess);
  if (i === 3) {
    alert(`Sorry ${userName}, my favorite number is 13!`);
  } else if (favNumCleaned < 13) {
    alert('Higher');
  } else if (favNumCleaned > 13) {
    alert('Lower');
  } else if (favNumCleaned === 13) {
    alert('Wow! Yep 13 is my favorite number. Weird one huh?');
    correctCounter++;
    break;
  }
}

let topTen = ['almond danish', 'tri-tip', 'refund policy', 'polish hot dog', 'rotisserie chicken', 'cheesecake', 'pesto', '5 layer chocolate cake', 'parmesean', 'ribs']

for (let i = 0; i < 6; i++) {
  let costco = prompt(`Hey ${userName}, can you guess one of my top ten items from Costco? I'll give you six gueses! You've used ${i} so far`).toLowerCase();

  for (let j = 0; j < topTen.length; j++) {
    if (costco === topTen[j]) {
      alert(`Holy crap, yep that's one of my favorites! ${topTen} all made the list`);
      correctCounter++;
      i = 6;
      break;
    }
  }
  if (i < 5) {
    alert('Sorry no that did not make my list.');
  } else if (i === 5) {
    alert(`Sorry none of those made my list. ${topTen} all made the list`);
  }
}

if (correctCounter === 7) {
  alert('Wow 7/7?! We should be best friends! You wanna get bunk beds?!');
} else if (correctCounter === 0) {
  alert('Sometimes I don\'t feel like you know me at all!');
} else {
  alert(`Well ${userName}, ${correctCounter}/7 isn\'t too bad!`);
}
