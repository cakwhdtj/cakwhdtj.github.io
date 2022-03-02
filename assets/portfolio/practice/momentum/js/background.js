const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];
const chosenImages = images[Math.floor(Math.random() * images.length)];

const bg = document.createElement("img");
bg.src = `img/${chosenImages}`

document.body.appendChild(bg);