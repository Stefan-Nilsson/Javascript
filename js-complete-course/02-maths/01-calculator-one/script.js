/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value



    document.getElementById("addition").addEventListener("click", function()
    {

        alert(Number(document.getElementById("op-one").value) + Number(document.getElementById("op-two").value))


    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        alert(Number(document.getElementById("op-one").value) - Number(document.getElementById("op-two").value))
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        alert(Number(document.getElementById("op-one").value) * Number(document.getElementById("op-two").value))
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        alert(Number(document.getElementById("op-one").value) / Number(document.getElementById("op-two").value))
    });



/*     trying to make my own function scribbles, not really important



function test1 (operatorOne) {
            document.getElementById("op-one").value = operatorOne;
        }
        function test2 (operatorTwo) {
            document.getElementById("op-two").value = operatorTwo;
        }

        alert(test1("return")






        function calculate (Number{(document.getElementById("op-one").value),
            Number (document.getElementById("op-two").value);}
        {
        return Number(document.getElementById("op-one").value)
            + Number (document.getElementById("op-two").value); } */


})();
