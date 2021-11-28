const loginForm = document.getElementById('login-form')
const loginInput = document.getElementById('login')
const greetingContainer = document.getElementById('greeting-container')
const greetingUser = document.getElementById('greeting-user')
const hello = document.getElementById('greeting')


const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

loginForm.addEventListener('submit',onLoginSubmit)



function paintGreeting(username) {
    greetingContainer.classList.remove(HIDDEN_CLASSNAME);
    greetingContainer.classList.add('active_greeting');
    greetingUser.innerText = `${username}!`
    const date = new Date();
    let time = date.getHours();
    if (time > 17) {
        hello.innerText = 'Good Evening, '
    } else if (time < 12 && time > 5) {
        hello.innerText = 'Good Morning, '
    } else if(time >= 12 && time <= 17) {
        hello.innerText = 'Good Afternoon, '
    } else {
        hello.innerText = 'It is time to go to bed, '
    }
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greetingContainer.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}

const logout = document.getElementById('logout')

function onLogout() {
    if (confirm('Do you want to logout?')){
        localStorage.clear();
        location.reload();
    } else {

    }
}

logout.addEventListener('click', onLogout)