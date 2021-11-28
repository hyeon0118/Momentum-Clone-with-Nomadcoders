const img = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"]
const randomImg = img[Math.floor(Math.random() * img.length)];

const background = document.createElement("img");

background.src = `img/${randomImg}`

document.body.appendChild(background);
background.id = "background"

