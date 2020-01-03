/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    /*
     Get the target text using a querySelector, mind you that u have to use # for id's and . for classes
     Possible alternative; let arr = str.split(/(?!$)/u);
    */
    let textToUse = document.querySelector("#target").innerText;
    console.log(textToUse);
    /*
     Create an array by using the split function, "" means split after every letter this creates 215 array elements
    */
    // let textToUseArray = textToUse.split("");
    // console.log(textToUseArray);
    document.querySelector("#target")["innerHTML"] = "";
    //console.log(textToUse);


    var speed = 50; /* The speed/duration of the effect in milliseconds */
    typeWriter(0);
    function typeWriter(i) {

       if (i < textToUse.length) {
            document.getElementById("target").innerHTML += textToUse.charAt(i);
            i++;
            setTimeout(function(){
                typeWriter(i);
            }, speed);

        }

    }


    /*
     let i = 0;


     for (i=0;i < textToUseArray.length;i++) {

         document.querySelector("#target")["innerHTML"] = textToUseArray[i];

     }
     /*
     if (i < textToUseArray.length) {
         console.log(textToUseArray[i]);
         document.querySelector("#target")["innerHTML"] = textToUseArray[i];
         i++;
     } else {
         console.log("nothing")
     }
     */



})();
