const form = document.getElementById("sign-up");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent refresh when submitting form
const username = document.getElementById("username-input"); // input field
const password = document.getElementById("password-input"); // input field
if(username !== "" && password !== "") {
    let userInput = {username:username.value, password:password.value}
console.log(userInput);
}


})


