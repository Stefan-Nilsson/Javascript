/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var i = 100;
    while (i > 1) {
        // Will evaluate to true if the variable is divisible by 3
        if ((i % 3 === 0 && i % 5) === 0) {

            console.log("fizzbuzz")
        }
        // Will evaluate to true if the variable is divisible by 5
        else if (i % 5 === 0) {

            console.log("buzz")
        }

            // Will evaluate to true if the variable is divisible by 3 & 5
        // Numbers % 3 === 0 && % 5 === 0;

        else if (i % 3 === 0) {

            console.log("fizz")
        } else {
            console.log(i);
        }
        i--;
    }


})();
