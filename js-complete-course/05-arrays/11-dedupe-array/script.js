/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // Find duplicates using for loop
    let item_list = [fruits];

    let duplicate = item_list.reduce((acc,currentValue,index, array) => {

        for (i=0;fruits.length; i++) {}



      //  if(fruits.indexOf(currentValue)!==index && !acc.includes(currentValue)) acc.push(currentValue);
        // acc;
    }, []);

    console.log('Duplicate items are ' + duplicate.join(','));

})();
