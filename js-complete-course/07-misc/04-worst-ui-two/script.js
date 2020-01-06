/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let numberTarget = document.querySelector("#target");
    numberTarget.innerHTML = "";
    let numberClicker1 = document.querySelector("#part-one");
    let numberClicker2 = document.querySelector("#part-two");
    let numberClicker3 = document.querySelector("#part-three");
    let numberClicker4 = document.querySelector("#part-four");
    numberTarget.innerHTML = numberClicker1.innerHTML + numberClicker2.innerHTML + numberClicker3.innerHTML + numberClicker4.innerHTML;








  numberClicker1.addEventListener("mouseup",function () {
    // numberTarget.innerHTML = numberTarget++;
console.log(numberClicker1.innerHTML);
      let varTest = (parseInt(numberClicker1.innerText++));
      numberTarget.innerHTML = numberClicker1.innerHTML + numberClicker2.innerHTML + numberClicker3.innerHTML + numberClicker4.innerHTML;
      // let varTest1 = (parseInt(numberClicker1.innerHTML++));
      if (varTest >= 498) {
          numberClicker1.innerText = 460;


      // if (varTest1 >= 498) {
        //  numberClicker1.innerHTML = 460;
     // }
      }
      //numberClicker1.innerHTML = numberSlider.value;
  });

    numberClicker2.addEventListener("mouseup",function () {
        // numberTarget.innerHTML = numberTarget++;

        console.log(numberClicker2.innerText)

        let varTest2 = (parseInt(numberClicker2.innerText++));
        // let varTest1 = (parseInt(numberClicker1.innerHTML++));

        if (varTest2 === "00") {
            console.log("continue")
        }
        else if (varTest2 < 9) {
            numberClicker2.innerHTML = "0" + numberClicker2.innerText;
        }
         else if (varTest2 >= 99)  {
            numberClicker2.innerText = "00"

        }
        numberTarget.innerHTML = numberClicker1.innerHTML + numberClicker2.innerHTML + numberClicker3.innerHTML + numberClicker4.innerHTML;

    });

    numberClicker3.addEventListener("mouseup",function () {
        // numberTarget.innerHTML = numberTarget++;

        console.log(numberClicker3.innerText);
        let varTest3 = (parseInt(numberClicker3.innerText++));
        // let varTest1 = (parseInt(numberClicker1.innerHTML++));
        if (varTest3 === "00") {
            console.log("continue")
        }
        else if (varTest3 < 9) {
            numberClicker3.innerText = "0" + numberClicker3.innerText;
        }
        else if (varTest3 >= 99)  {
            numberClicker3.innerText = "00"

        }
        numberTarget.innerHTML = numberClicker1.innerHTML + numberClicker2.innerHTML + numberClicker3.innerHTML + numberClicker4.innerHTML;

    });

    numberClicker4.addEventListener("mouseup",function () {
        // numberTarget.innerHTML = numberTarget++;

        console.log(numberClicker4.innerHTML);
        let varTest4 = (parseInt(numberClicker4.innerText++));
        // let varTest1 = (parseInt(numberClicker1.innerHTML++));
        if (varTest4 === "00") {
            console.log("continue")
        }
        else if (varTest4 < 9) {
            numberClicker4.innerText = "0" + numberClicker4.innerText;
        }
        else if (varTest4 >= 99)  {
            numberClicker4.innerText = "00"

        }
        numberTarget.innerHTML = numberClicker1.innerHTML + numberClicker2.innerHTML + numberClicker3.innerHTML + numberClicker4.innerHTML;

    });


})();


/*
   console.log(numberTarget);
  let arrayTarget =  numberTarget.split("+");
   console.log(arrayTarget);
   let rightTarget = arrayTarget[1];
  let parseTarget = parseInt(rightTarget);
   console.log(parseTarget);
*/