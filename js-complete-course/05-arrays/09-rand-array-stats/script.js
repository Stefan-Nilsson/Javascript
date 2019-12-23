/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {


        var rngArray = Array.from({length: 10}, () => Math.floor(Math.random() * 100));


        for (i = 1; rngArray.length; i++)
            (document.getElementById(`n-${i}`).innerHTML) = rngArray[i - 1];




        document.getElementById("min").innerHTML =  rngArray.reduce((bestIndexSoFar, currentlyTestedValue, currentlyTestedIndex, array) => currentlyTestedValue > array[bestIndexSoFar] ? currentlyTestedIndex : bestIndexSoFar, 0);
    });


})();


//document.getElementById("min").innerHTML = rngArray.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

// document.write("indexOfMaxValue = " + indexOfMaxValue); // prints "indexOfMaxValue = 2"



/*
  var peopleResult = people.filter(function(result) {
      return result.age > 18;})

   */
/*
 var minVa

 for (i=1;)
 (document.getElementById("min").innerHTML) =
*/


/*
        let varOne = Math.floor(Math.random() * 100);
        let varTwo = Math.floor(Math.random() * 100);
        let varThree = Math.floor(Math.random() * 100);
        let varFour = Math.floor(Math.random() * 100);
        let varFive = Math.floor(Math.random() * 100);
        let varSix = Math.floor(Math.random() * 100);
        let varSeven = Math.floor(Math.random() * 100);
        let varEight = Math.floor(Math.random() * 100);
        let varNine = Math.floor(Math.random() * 100);
        let varTen = Math.floor(Math.random() * 100);

 */