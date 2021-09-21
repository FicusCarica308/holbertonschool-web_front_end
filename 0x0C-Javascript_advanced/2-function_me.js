/*
* welcomeMessage - function that returns another function outlining javascripts closure system
*/
function welcomeMessage(fullName) {
    return function () {
        alert("Welcome " + fullName);
    }
}
let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");
