/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



var operatorOne =  Number(document.getElementById("op-one").value);
var operatorTwo = Number(document.getElementById("op-two").value);



function calc (calculationTypeIs) {
    switch (calculationTypeIs) {
        case 'addition': alert(operatorOne + operatorTwo);
            break;
        case 'substraction': alert(operatorOne - operatorTwo);
            break;
        case 'multiplication': alert(operatorOne * operatorTwo);
            break;
        case 'division': alert(operatorOne / operatorTwo);
        default: break;
}
}
