/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let numberText = document.querySelector("#target");
    let numberSlider = document.querySelector("#slider");

    numberText.value = numberSlider.value;

    console.log(numberText.value);

    numberSlider.addEventListener("mouseup", function () {
        console.log(numberSlider.value);
    numberText.innerHTML = "0" + numberSlider.value;




    })

    // voor in de toekomst: maak een while.for loopish ding dat continu
    // de nummerverandering aangeeft met een mousedown event

})();
