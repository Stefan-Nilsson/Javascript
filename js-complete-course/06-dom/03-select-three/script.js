/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // this makes a variable that consists of an array containing all the "target" classes
   const targetClass = document.querySelectorAll(".target");
    console.log(targetClass);

    // this loops through the Array, starting at the first one (= 0) and going through the entire length of the Array
    // every time it loops through it adds one to the var i (i++)
    for (var i = 0; i < targetClass.length; i++) {
        targetClass[i].innerHTML = "new content";
    }

})();
