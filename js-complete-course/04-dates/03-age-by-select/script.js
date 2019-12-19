/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
      const birthYear = (document.getElementById("dob-year").value);
      const current= new Date();
      const currentYear = current.getFullYear();

      let currentAge = (currentYear - birthYear);
      alert (currentAge);


    })

})();
