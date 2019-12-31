/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let x = 0;
    let y = x++;

    var myArray    = new Array();
    myArray[0] = 1;
    myArray[1] = 2;
    myArray[2] = 3;
    myArray[3] = 4;
    myArray[4] = 5;
    myArray[5] = 6;
    myArray[6] = 7;
    myArray[7] = 8;
    myArray[8] = 9;
    myArray[9] = 10;


    var myTable= "<table><tr><td style='width: 100px; color: red;'></td>";
    myTable+= "<td style='width: 100px; color: red; text-align: right;'>Table</td>";
    myTable+= "<td style='width: 100px; color: red; text-align: right;'>Table</td>";
    myTable+= "<td style='width: 100px; color: red; text-align: right;'>Table</td>";
    myTable+= "<td style='width: 100px; color: red; text-align: right;'>Table</td>";
    myTable+= "<td style='width: 100px; color: red; text-align: right;'>Table</td>";
    myTable+= "<td style='width: 100px; color: red; text-align: right;'>Table</td>";
    myTable+= "<td style='width: 100px; color: red; text-align: right;'>Table</td>";
    myTable+= "<td style='width: 100px; color: red; text-align: right;'>Table</td>";
    myTable+= "<td style='width: 100px; color: red; text-align: right;'>Table</td>";
    myTable+="<td style='width: 100px; color: red; text-align: right;'>Table</td></tr>";


    myTable+="<tr><td style='width: 100px;                   '></td>";
    myTable+="<td     style='width: 100px; text-align: right; color: red;'>1</td>";
    myTable+="<td     style='width: 100px; text-align: right; color: red;'>2</td>";
    myTable+="<td     style='width: 100px; text-align: right; color: red;'>3</td>";
    myTable+="<td     style='width: 100px; text-align: right; color: red;'>4</td>";
    myTable+="<td     style='width: 100px; text-align: right; color: red;'>5</td>";
    myTable+="<td     style='width: 100px; text-align: right; color: red;'>6</td>";
    myTable+="<td     style='width: 100px; text-align: right; color: red;'>7</td>";
    myTable+="<td     style='width: 100px; text-align: right; color: red;'>8</td>";
    myTable+="<td     style='width: 100px; text-align: right; color: red;'>9</td>";
    myTable+="<td     style='width: 100px; text-align: right; color: red;'>10</td></tr>";

    for (var i=0; i<10; i++) {
        myTable+="<tr><td style='width: 100px; text-align: right; color: red;'>Times " + (i + 1) + "</td>";
        myArray[i] = myArray[i].toFixed(3);
        myTable+="<td style='width: 100px; text-align: right;'>" + ((1) * myArray[i]) + "</td>";
        myTable+="<td style='width: 100px; text-align: right;'>" + ((2) * myArray[i]) + "</td>";
        myTable+="<td style='width: 100px; text-align: right;'>" + ((3) * myArray[i]) + "</td>";
        myTable+="<td style='width: 100px; text-align: right;'>" + ((4) * myArray[i]) + "</td>";
        myTable+="<td style='width: 100px; text-align: right;'>" + ((5) * myArray[i]) + "</td>";
        myTable+="<td style='width: 100px; text-align: right;'>" + ((6) * myArray[i]) + "</td>";
        myTable+="<td style='width: 100px; text-align: right;'>" +((7) * myArray[i]) + "</td>";
        myTable+="<td style='width: 100px; text-align: right;'>" + ((8) * myArray[i]) + "</td>";
        myTable+="<td style='width: 100px; text-align: right;'>" + ((9) * myArray[i]) + "</td>";
        myTable+="<td style='width: 100px; text-align: right;'>" + ((10) * myArray[i])+ "</td></tr>";
    }
    myTable+="</table>";

    document.getElementById('target').innerHTML = myTable;

})();
