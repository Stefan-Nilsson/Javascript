/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let regExp1 = new RegExp("[a-z]", "gi",);
    let passwordField = document.getElementById("pass-one");
    let indicatorCount = document.getElementsByClassName("indicator");
    passwordField.maxLength = 10;


    document.getElementById("pass-one").addEventListener("keyup", function () {
        let matchChecker = passwordField.value.match(regExp1);
        document.getElementById("counter").innerHTML = matchChecker.length;

    });

})();


/*
<label for="pass-one">Password:</label>
<input type="text" name="pass-one" id="pass-one" />
<span id="counter" class="indicator">0/10</span>
 */