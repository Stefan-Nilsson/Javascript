/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {


        // document.body.style.background =
        // Random string generator
        // .floor(hierin de zaken waar de bodem voor geldt) dient om komma getallen te voorkomen
        // .random(getal tussen 0 en 1) dient om een random getal tussen 0 en 1 te maken
        // .random() * 255 zegt dat de randomness naar 255 wordt gezet ipv 1
        // maw een random getal tussen 0 en 255
        let a = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let c = Math.floor(Math.random() * 255);
        // Number(a);
        // Number(b);
        // Number(c);

        var allVars = "rgb(" + (a) + ", " + (b) + ", " + (c);


        document.body.style.background = allVars;


        // console.log( a, ",", b, ",", c ); (a, b, c)

    });

})();
