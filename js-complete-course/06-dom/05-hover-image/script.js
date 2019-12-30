/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {


    // create var for the img tag/element
    let imgUsed = document.getElementsByTagName("img")[0];

    // hover effect
    imgUsed.addEventListener("mouseover", function () {
        imgUsed.setAttribute("src", "../../_shared/img/kiss-wink-heart.svg");
    // now it has to change back to the original img
     imgUsed.addEventListener("mouseout", function () {
         imgUsed.setAttribute("src","../../_shared/img/kiss.svg")

     })

    });


})();
