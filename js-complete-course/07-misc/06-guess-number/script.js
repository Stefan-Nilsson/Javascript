/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

let numberToGuess = Math.floor(Math.random () * 100);
let guessInput = document.getElementById("part-one");
let tryCounter = 0;
let guessButton = document.getElementById("fix-part-one");
let targetThing = document.getElementById("target");
targetThing.innerHTML = "";
console.log(numberToGuess);

guessButton.addEventListener("click",function () {
    if (numberToGuess == guessInput.value) {
        tryCounter++;
        targetThing.innerHTML = "That's it, tries: " +  tryCounter;
    }
    else if (numberToGuess < guessInput.value) {
        tryCounter++;
        targetThing.innerHTML = "Not quite there yet, guess lower, tries: " + tryCounter;
    }
    else {
        tryCounter++;
        targetThing.innerHTML = "not quite there yet, guess higher, tries: " + tryCounter;
    }

    console.log(tryCounter);
    console.log(targetThing.innerHTML);
    console.log(guessInput.value);
})


})();
