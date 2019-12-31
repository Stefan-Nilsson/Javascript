/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var password1 = document.getElementById("pass-one");
    var password2 = document.getElementById("pass-two");

document.getElementById("run").addEventListener("click",function () {

    console.log(password1.value);
    console.log(password2.value);


        // If password not entered
        if (password1.value === '')
            alert("Please enter Password");

        // If confirm password not entered
        else if (password2.value === '')
            alert ("Please enter confirm password");

        // If Not same return False.
        else if (password1.value !== password2.value) {
            alert ("\nPassword did not match: Please try again...");
            return false;
        }

        // If same return True.
        else{
            alert("Password Match: Welcome to Stefan's site for Sprite!");
            return true;
        }






})


})();
