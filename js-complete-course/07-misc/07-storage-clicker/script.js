/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let numberTarget = document.querySelector("#target");
    let guessButton = document.getElementById("increment");

    guessButton.addEventListener("click", function () {
        numberTarget.innerText++;
        localStorage.setItem("setClickValue", numberTarget.innerText);
        console.log(localStorage.getItem("setClickValue"));
        numberTarget.innerHTML = localStorage.getItem("setClickValue");

    })

})();
