/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



switch (stefan) {
    case 'addition':
        document.getElementById("addition").addEventListener("click", function() {

            alert(Number(document.getElementById('op-one'.value)) + Number(document.getElementById('op-two'.value)))
        }
        break;
        /*
    case 'Apples':
        console.log('Apples are $0.32 a pound.');
        break;
    case 'Bananas':
        console.log('Bananas are $0.48 a pound.');
        break;
    case 'Cherries':
        console.log('Cherries are $3.00 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
    default:
        console.log('Sorry, we are out of ' + expr + '.');
}

console.log("Is there anything else you'd like?");*/
}