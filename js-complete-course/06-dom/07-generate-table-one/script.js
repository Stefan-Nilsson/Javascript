/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var myArray    = new Array();
    myArray[0] = 3;
    myArray[1] = 4;
    myArray[2] = 5;
    myArray[3] = 6;
    myArray[4] = 7;
    myArray[5] = 8;
    myArray[6] = 9;
    myArray[7] = 10;

    var myTable= "<table><tr><td style='width: 100px;'>Number 1 is:</td>";


    myTable+="<tr><td style='width: 100px;                   '>Number 2 is:</td>";


    for (var i=0; i<8; i++) {
        myTable+="<tr><td style='width: 100px;'>Number " + (i + 3) + " is:</td>";
        myArray[i] = myArray[i].toFixed(3);


    }
    myTable+="</table>";

    document.getElementById('target').innerHTML = myTable;

   // document.write( myTable);


})();
