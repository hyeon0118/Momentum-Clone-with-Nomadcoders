const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting-container");
const greetingUser = document.querySelector("#greeting-container h1")

const HIDDEN_CLASSNAME = "hidden";

const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}




loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greetingUser.innerText = `${username}!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}



