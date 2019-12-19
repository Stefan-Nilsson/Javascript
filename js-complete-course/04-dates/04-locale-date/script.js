/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {



    const current = new Date();
    const currentDay = current.getDay();
    const currentDate = current.getDate();
    const currentMonth = current.getMonth();
    const currentYear = current.getFullYear();
    const currentHour = current.getHours();
    const currentMinutes = current.getMinutes();
    const currentHourPlusMinutes = ((currentHour) + ("h") + (currentMinutes));

    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    let textDay;
    textDay = weekdays[current.getDay()];

    


        const allDataNicelyPut = ((textDay) + " " + (currentDate) + " " + (currentMonth) + " " + (currentYear) + " " + (currentHourPlusMinutes));
        document.getElementById("target").innerHTML = allDataNicelyPut;



    /*
    Change the content of the indicated tag
    by the date of today, in English
    (ex : Sunday 28 October 2018, 23h32).
    */
})();
