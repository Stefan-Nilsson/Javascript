/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //create img element
   let imgUsed = document.createElement("img");
   //check if img element is there, see how it looks like, as in: what dit the previous line of code just do?
   console.log(imgUsed);
   //add the source to the newly created img element, first source Id, second data img Attribute
   imgUsed.src = document.getElementById("source").getAttribute("data-image");
   //put imgUsed inside of the target Id
   document.getElementById("target").append(imgUsed);
   //remove the span/source Id
   document.getElementById("source").remove();





})();
