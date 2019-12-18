/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {
        //

        var numberList = (document.getElementById("numbers").value);
        var splitList = numberList.split(", ");

        var sorterList = splitList.sort(function(a, b){return a - b});
        alert(sorterList);


        /* function sortNumbers(a, b) {
            if (a > b) {
                return 1;
            } else if (b > a) {
                return -1;
            } else {
                return 0;
            }
        }
        */

    });

})();


/*

const numberList = Number(document.getElementById("numbers").value);
numberList.sort();
alert(Number(numberList.value));
*/