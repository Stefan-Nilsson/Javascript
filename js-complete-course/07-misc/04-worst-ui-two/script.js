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

    let numberTarget = document.querySelector("#target").innerText;
    let numberClicker1 = document.querySelector("#part-one");
    let numberClicker2 = document.querySelector("#part-two");
    let numberClicker3 = document.querySelector("#part-three");
    let numberClicker4 = document.querySelector("#part-four");









  numberClicker1.addEventListener("mouseup",function () {
    // numberTarget.innerHTML = numberTarget++;

      let varTest = (parseInt(numberClicker1.innerText++));

      if (varTest >= 498) {
          numberClicker1 = 460;

      }
      //numberClicker1.innerHTML = numberSlider.value;
  });

    numberClicker2.addEventListener("mouseup",function () {
        // numberTarget.innerHTML = numberTarget++;

        console.log(numberClicker2.innerText)

    });

    numberClicker3.addEventListener("mouseup",function () {
        // numberTarget.innerHTML = numberTarget++;

        console.log(numberClicker3.innerText)

    });

    numberClicker4.addEventListener("mouseup",function () {
        // numberTarget.innerHTML = numberTarget++;

        console.log(numberClicker4.innerText)

    })


})();


/*
   console.log(numberTarget);
  let arrayTarget =  numberTarget.split("+");
   console.log(arrayTarget);
   let rightTarget = arrayTarget[1];
  let parseTarget = parseInt(rightTarget);
   console.log(parseTarget);
*/