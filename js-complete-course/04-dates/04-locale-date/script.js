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


         // create an array
    var weekdays = new Array(7);
        // store day names into our array
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    let textDay = weekdays[currentDay];



         // create an array
    var monthsArr = new Array(12);
        // store month names into our array
    monthsArr[0] = "January";
    monthsArr[1] = "February";
    monthsArr[2] = "March";
    monthsArr[3] = "April";
    monthsArr[4] = "May";
    monthsArr[5] = "June";
    monthsArr[6] = "July";
    monthsArr[7] = "August";
    monthsArr[8] = "September";
    monthsArr[9] = "October";
    monthsArr[10] = "November";
    monthsArr[11] = "December";
    let textMonth = monthsArr[currentMonth];



    document.getElementById("target").innerHTML = ((textDay) + " " + (currentDate) + " " + (textMonth) + " " + (currentYear) + " " + (currentHourPlusMinutes));



    /*
    Change the content of the indicated tag
    by the date of today, in English
    (ex : Sunday 28 October 2018, 23h32).
    */
})();
