/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function () {
    document.getElementById("run").addEventListener("click", function () {

        catchHero().catch(error => {
            console.log("error");
            console.error(error);

        })


    });


})();

async function catchHero() {
    const response = await fetch("http://localhost:12345/_shared/api.json");
    const varHeroList = await response.json();
    const varHeroDeep = varHeroList.heroes;
    console.log(varHeroDeep);
// add var's
    let varHeroName = document.getElementById("hero-name").value;
    let varHeroAlterEgo = document.getElementById("hero-alter-ego").value;
    let varHeroPowers = document.getElementById("hero-powers").value;
    let newHeroId = varHeroDeep.length + 1;



    // make new hero using class and push to array
    let userCreatedHero = new Hero(newHeroId, varHeroName, varHeroPowers, varHeroAlterEgo)
    varHeroDeep.push(userCreatedHero);
    console.log(varHeroDeep);

    
}

class Hero {
    constructor(heroId, heroName, heroAlterEgo, heroAbilities) {
        this.id = heroId;
        this.name = heroName;
        this.alterEgo = heroAlterEgo;
        this.abilities = heroAbilities;
    }
}
