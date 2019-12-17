/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// Here I create two variables who contain the value of the two operators (text inputs) in the index.html
// Because of this I do not have to write the whole code again and again
// Because of this I can work a lot more efficient and I have a better understanding about what i'm trying to accomplish
// FIRST declare variable name
// SECOND =
// THIRD Number(1239213) Number makes whatever's inside of the brackets a Number class instead of a string class
// SIDENOTE you can not combine parseInt and Number so if one of both has been used you must continue to use the same type
// FOURTH document means the whole html page/index.html
// FIFTH getElementById looks for the id inside the document called whatever's inside the ("tralalala")
// SIXTH .value looks for the value of the Id for which you looked

var operatorOne = Number(document.getElementById("op-one").value);
var operatorTwo = Number(document.getElementById("op-two").value);

// Here I create a function that uses a switch case
//
// Function, declares a function, functionname, calc ==> (parameter, this will be case one in case of case one)
// functionname(caseOne addition) or (caseTwo subtraction) or (caseThree multiplication)
// functionname(parameterOne, parameterTwo) in this case there's only one parameter
// do whatever come's inside of the curly brackets
// { in case of parameter addition do addition, in case of parameter subtraction....}
//
function calc(calculationTypeIs) {
    switch (calculationTypeIs) {
        case 'addition':
            alert(operatorOne + operatorTwo);
            break;
        case 'substraction':
            alert(operatorOne - operatorTwo);
            break;
        case 'multiplication':
            alert(operatorOne * operatorTwo);
            break;
        case 'division':
            alert(operatorOne / operatorTwo);
        default:
            break;
    }
}
