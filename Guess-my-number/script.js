"use strict";

let randomNum = Math.floor(Math.random() * 100) + 1;
let guess = document.getElementById("guess");
let submit = document.getElementById("submit"); 
let attempts = document.getElementById("attempts");
let hint = document.getElementById("hint");

submit.addEventListener("click", storeGuess);

function storeGuess() {
    let userGuess = parseInt(guess.value, 10); // Convert the guess to a number

    if (userGuess === randomNum) {
        console.log("You Got it!");
    } else {
        console.log("Wrong Guess, try again");
    }
}
