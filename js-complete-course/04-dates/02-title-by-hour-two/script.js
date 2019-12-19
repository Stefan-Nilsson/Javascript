/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // creating the extra if of (hours<17) fixed my problem, took some time but i found it

    var current= new Date();

    var hours=current.getHours();
    var minutes=current.getMinutes();
    if (hours<17) {
        document.getElementById("target").innerHTML = "Hello";}

    else if ((hours <= 17) && (minutes<=30)) {
        document.getElementById("target").innerHTML = "Hello";}

    else
        document.getElementById("target").innerHTML = "Good evening";

    // used this for testing out the statements
    console.log(new Date);
    console.log(current.getHours());
    console.log(current.getMinutes());

})();


