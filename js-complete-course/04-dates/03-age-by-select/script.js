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

    // hier een fout gemaakt bij het maken van de eventlistener
    // het is .addEventlistener("click"    niet het haakje sluiten, een komma zetten en daarna function()
    // daarna { hier schrijf je je functie in die bij het klikken moet gebeuren en daarna
    // afsluiten met } en zeker niet vergeten )

    document.getElementById("run").addEventListener("click", function() {
        // hier maak ik een variabel om het gegeven input jaar op te halen
      const birthYear = (document.getElementById("dob-year").value);
       // hier maak ik een variabel om een nieuw jaartal of uur of whatever op te halen
      const current= new Date();
       // dit doe ik door daarna nog een variabel te maken met de vorige + .getFullYear();
        // Afhankelijk van je gebruik kan je er meerdere maken bvb:
        // current.getHours(), current.getMinutes()    etc...
      const currentYear = current.getFullYear();

      let currentAge = (currentYear - birthYear);
      alert (currentAge);


    })

})();
