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


    document.getElementById("run").addEventListener("click",function () {


        let unique = [...new Set(fruits)];
        console.log(unique);




    })
})();


/*

try out 1
      let item_list = [fruits];

  let duplicate = item_list.reduce((acc,currentValue,index, array) => {
        if(array.indexOf(currentValue)!==index && !acc.includes(currentValue)) acc.push(currentValue);
        return acc;
    }, []);

    console.log('Duplicate items are ' + duplicate.join(','));


try out 2
  function unite(...data) {
            return [].concat.apply([], data).reduce((result, current) => {
                return ~result.indexOf(current)
                    ? result
                    : result.concat(current)
            }, []);
   console.log(unite([1,2,3], [1, 4, 4, 5, 6]));


    Other options found @ https://wsvincent.com/javascript-remove-duplicates-array/
    Another option is to use filter().

const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

let x = (names) => names.filter((v,i) => names.indexOf(v) === i)
x(names); // 'John', 'Paul', 'George', 'Ringo'

And finally we can use forEach().

const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

function removeDups(names) {
  let unique = {};
  names.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

removeDups(names); // // 'John', 'Paul', 'George', 'Ringo'


   */