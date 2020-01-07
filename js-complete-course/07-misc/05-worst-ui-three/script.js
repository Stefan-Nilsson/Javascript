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


    let targetTarget = document.getElementsByTagName("target");
    targetTarget.innerHTML = "";
    let speed = 100;
    let speed2 = 80;
    let setSpeedAndRng = setInterval(rngesus, speed);
    let setSpeedAndRng2 = setInterval(rngesus2, speed2);
    let setSpeedAndRng3 = setInterval(rngesus3, speed2);
    let setSpeedAndRng4 = setInterval(rngesus4, speed2);
    let numberClicker1 = document.querySelector("#part-one");
    let numberClicker2 = document.querySelector("#part-two");
    let numberClicker3 = document.querySelector("#part-three");
    let numberClicker4 = document.querySelector("#part-four");
    let inputVar = document.querySelectorAll("button");

    inputVar.forEach(function (datam) {
        datam.addEventListener("click", function () {
            console.log(datam.id);
            switch (this.id) {
                case "fix-part-one": clearInterval(setSpeedAndRng);
                console.log(parseInt(numberClicker1.value));
                targetTarget.innerHTML = numberClicker1.value + numberClicker2.value + numberClicker3.value + numberClicker4.value;
                break;
                case "fix-part-two":  clearInterval(setSpeedAndRng2);
                    console.log(parseInt(numberClicker2.value));
                    targetTarget.innerHTML = numberClicker1.value + numberClicker2.value + numberClicker3.value + numberClicker4.value;                break;
                case "fix-part-three": clearInterval(setSpeedAndRng3);
                    console.log(parseInt(numberClicker3.value));
                    targetTarget.innerHTML = numberClicker1.value + numberClicker2.value + numberClicker3.value + numberClicker4.value;                break;
                case "fix-part-four":  clearInterval(setSpeedAndRng4);
                    console.log(parseInt(numberClicker4.value));
                    targetTarget.innerHTML = numberClicker1.value + numberClicker2.value + numberClicker3.value + numberClicker4.value;


            }
        })


    });

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
    document.getElementsByTagName("input").innerHTML = 460000000;
    buttonClassOne.forEach(function (button) {
        buttonClassOne.addEventListener("click", function () {

        });
        if (button.id === "fix-part-one") {
            clearInterval(rngesus());
            console.log("hello baby");
        }
    });
})();
