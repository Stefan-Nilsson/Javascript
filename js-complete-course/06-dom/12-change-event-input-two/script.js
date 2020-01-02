/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // alle letters tussen a en Z, g = global, i = case insensitive
    let regExp1 = new RegExp (".*[0-9].*[0-9]");
    // een variabel voor mijn passwoord inputfield
    let passwordField = document.getElementById("pass-one");
    // een variabel voor de counter
    let validatorValid = document.getElementById("validity");


    // event listener on Key up (dus wanneer iemand de toets los laat)
    document.getElementById("pass-one").addEventListener("keyup", function () {
        // hier maak ik een variabel die iedere keer dat je een lettertoets indrukt en los laat
        // kijkt of het overeenkomt met de regular expression die je eerder definieerde

        let matchChecker = regExp1.test(passwordField.value);

            if (passwordField.value.length >= 8 && matchChecker) {
                validatorValid.innerHTML = ("ok");
            }
            else {
                validatorValid.innerHTML = ("not ok");
            }





        /*
        alt code

        for ( matchChecker of document.getElementById("pass-one").value) {
            console.log(matchChecker);


if (matchChecker) {

    validatorValid.innerHTML = ("ok");
}
else {
    validatorValid.innerHTML = ("not ok");
}

         */
    });
})();
