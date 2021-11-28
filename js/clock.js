const clock = document.querySelector('h2#clock')
const localInfo = document.getElementById('local-info')
const todayDate = document.getElementById('date')



function getClock() {
    localInfo.classList.remove(HIDDEN_CLASSNAME);
    const date = new Date();
    const dayName = date.toLocaleString('en-us', {weekday: 'short'});
    const day = String(date.getDate());
    const month = date.toLocaleString('default', {month : 'long'});
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    clock.innerText = `${hours}:${minutes}:${seconds}`
    todayDate.innerText = `${dayName}. ${day} ${month}`
}

getClock();
setInterval(getClock, 1000);


function activeClass() {
    localInfo.classList.add('active_localInfo');
}

loginForm.addEventListener('submit',activeClass);

if (savedUsername === null) {
    clock.classList.remove('active_localInfo');
} else {
    activeClass();
}

