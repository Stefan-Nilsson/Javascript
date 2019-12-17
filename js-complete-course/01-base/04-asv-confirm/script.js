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
    var number = Number(age) + 2;
    var gender = prompt("With what gender do you identify?", "Anything is possible");

    var location = prompt("Where do you live?", "I won't stalk you!(or maybe I will)");

    var troll = confirm(`Your age is: ${number},\nyour gender identity is: ${gender}\nand your bathroom with soon to be installed camera's\n is located near: ${location}.\npress ok if correct\npress cancel if you want to fill in the form again.`);

if (troll != true) {self.location = self.location;}

})();


/*

Display the collected responses in a <em>dialog box</em> and ask to confirm.
If not confirmed, <strong>re-run the process

 */