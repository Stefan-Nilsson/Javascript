/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var numberOne = 460;
    var numberTwo = 0;
    var numberThree = 0;
    var numberFour = 0;
    var number1Text = "460";
    var number2Text = "00";
    var number3Text = "00";
    var number4Text = "00";

    var speed = 100;
    var speed2 = 80;
    var setSpeedandRng = setInterval(rngesus, speed);
    var setSpeedAndRng2 = setInterval(rngesus2, speed2);
    var setSpeedAndRng3 = setInterval(rngesus3, speed2);
    var setSpeedAndRng4 = setInterval(rngesus4, speed2);

    function rngesus () {
        var rngOne = Math.floor(Math.random() * (499 - 460) + 460);
        document.getElementById('part-one').setAttribute("value",rngOne) ;
    }
    function rngesus2 () {
        var rngTwo = Math.floor(Math.random () * 100);
        document.getElementById("part-two").setAttribute("value" ,rngTwo);
    }
    function rngesus3 () {
        var rngThree = Math.floor(Math.random () * 100);
        document.getElementById("part-three").setAttribute("value" ,rngThree);
    }
    function rngesus4 () {
        var rngFour = Math.floor(Math.random () * 100);
        document.getElementById("part-four").setAttribute("value" ,rngFour);
    }

    let buttonClassOne = document.querySelectorAll(".button");
    document.getElementById("target").innerHTML = 460000000;
    buttonClassOne.forEach(function (button) {
        buttonClassOne.addEventListener("click", function () {

        });
        if (button.id === "fix-part-one") {
            clearInterval(rngesus());
            console.log("hello baby");
        }
    });
})();
