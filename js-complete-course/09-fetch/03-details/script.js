/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    document.getElementById("run").addEventListener("click", function () {
        let heroChosenByPleb = document.querySelector("#hero-id");
        // heroChosenByPleb.innerHTML = "";
        let varInput = parseInt(heroChosenByPleb.value);
        console.log(varInput);

        catchHero().catch(error => {
            console.log("error");
            console.error(error);
        });

        async function catchHero() {
            const response = await fetch('http://localhost:12345/_shared/api.json');
            const heroIsChosen = await response.json();

            let varTarget = document.getElementById("target");
            // console.log(heroIsChosen.heroes[1].name);
            // console.log(heroChosenByPleb.innerHTML);
            console.log(heroIsChosen.heroes[0].id);
            varTarget.innerHTML = heroIsChosen.heroes[varInput].name + "</br>" + heroIsChosen.heroes[varInput].alterEgo + "</br>" + heroIsChosen.heroes[varInput].abilities;

        }
    });
})();


/*
        for (i=0; i < heroIsChosen.heroes.length; i++){
            console.log(heroIsChosen.heroes[i])
        };

 */