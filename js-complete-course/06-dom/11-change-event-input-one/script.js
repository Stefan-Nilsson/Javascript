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

    // alle letters tussen a en Z, g = global, i = case insensitive
    let regExp1 = new RegExp("[a-z]", "gi",);
    // een variabel voor mijn passwoord inputfield
    let passwordField = document.getElementById("pass-one");
    // een variabel voor de counter
    let counterCount = document.getElementById("counter");
    // de maximum lengte van het inputfield
    passwordField.maxLength = 10;

    // event listener on Key up (dus wanneer iemand de toets los laat)
    document.getElementById("pass-one").addEventListener("keyup", function () {
        // hier maak ik een variabel die iedere keer dat je een lettertoets indrukt en los laat
        // kijkt of het overeenkomt met de regular expression die je eerder definieerde
        
        let matchChecker = passwordField.value.match(regExp1);
        counterCount.innerHTML = matchChecker.length;

    });

})();





/*
<label for="pass-one">Password:</label>
<input type="text" name="pass-one" id="pass-one" />
<span id="counter" class="indicator">0/10</span>
 */