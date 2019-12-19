/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    document.getElementById("run").addEventListener("click",function () {

        const event = new Date('2019');

        event.setFullYear(document.getElementById("year").value);
        event.setMonth(0);
        event.setDate(13);
        let varYear = event.getFullYear();
        let varMonth = event.getMonth();
        let varDate = event.getDate();
        let varDay = event.getDay();

        let varMonthChanger = event.setMonth(varMonth++);

        for (varMonth === 1; varMonth ===12; varMonth++) {

            if (varDay === 5) {alert("ITS FRIDAY")}





        }






        console.log(event.getFullYear());
        console.log(event.getDay());
        console.log(event.getMonth());
        console.log(event.getDate());






    })
})();








/* tot nu bezig geweest met logica te onderzoeken van de for loop
 op:
 https://medium.com/@omarshishanischool/how-does-a-javascript-for-loop-work-85d2c5d879c8
 Dit omdat ik momenteel denk om een for loop in een for loop te doen.

 Iets in de aard van:
(hier jaartal waarin de code moet werken)



let chosenYear;
chosenYear = (document.getElementById("year").value);
new Date(chosenYear);
let currentDay = Date.getDay();
let currentDate = Date.getDate();
let currentMonth;
currentMonth = Date.getMonth();


let chosenYear;
chosenYear.setFullYear(document.getElementById("year").value);
console.log(Date)


        if (chosenYear) {
            for (chosenYear; chosenYear; chosenYear) {
                for (currentMonth = 1; currentMonth === 12; currentMonth++) {
                   for (currentDate= 1; currentDate === 31; currentDate++) {
                       for (currentDay= 1; currentDay === 6; currentDay++) {
                          if ((currentDay = 5) && (currentDate = 13)) {
                               alert("ITS FRIDAY BABY")
                           }
                       }
                   }







                }

            }


            /*
            When you click the button,
            display each month of the specified year
            that has a Friday 13th.



niet op letten  for (i=1;i<=31;i++) {

}

      const event = new Date(document.getElementById("year"));
        console.log(event)
 */
