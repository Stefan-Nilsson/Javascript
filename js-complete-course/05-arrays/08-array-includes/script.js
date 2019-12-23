/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "lol",
        "perry",
        "strawberry",
        "tomato",
        "nononono",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "apple",
    ];

document.getElementById("run").addEventListener("click",function f() {
        for (var i=0;i<fruits.length;i++) {
            if (fruits[i] != ('apple')) {
                console.log("no" + i);
            } else {
                console.log("yes");
            }
    }

});



/*

    for (i=0;i<12;i++) {if ([0]) {
        console.log("yes");
    }
    else console.log("no");


    }
    */

/*
    if ([0]) {
        console.log("yes");
    }
    else if ([1,2,3,4,5,6,7,8,9,10]) {console.log("no");}

    else console.log("try out")
*/

})();
