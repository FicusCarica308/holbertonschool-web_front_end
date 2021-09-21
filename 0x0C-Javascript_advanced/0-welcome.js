/*
* welcome - prints out the full name of a user
* @firstName: First name of the user (String)
* @lastName: Last name of the user (String)
* Return: does not return any values
*/
function welcome (firstName, lastName) {
    let fullName = (firstName  + ' ' + lastName);

    function displayFullName () {
        alert("Welcome " + fullName + " !");
    }

    displayFullName();
}
