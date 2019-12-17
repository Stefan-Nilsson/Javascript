/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {


    var age = prompt("What's your age?", "Don't lie!");
    var number = Number(age);
    var gender = prompt("With what gender do you identify?", "Anything is possible");
    console.log(gender);
    var location = prompt("Where do you live?", "I won't stalk you!(or maybe I will)");

    var troll = confirm(`Your age is: ${number + 2},\nyour gender identity is: ${gender}\nand your bathroom with soon to be installed camera's\n is located near: ${location}.`);

    if (person) {

        window.confirm("confragulations")

    } else {
        confirm("Fine, More cake for me then!")

    }


})();


/*

Display the collected responses in a <em>dialog box</em> and ask to confirm.
If not confirmed, <strong>re-run the process

 */