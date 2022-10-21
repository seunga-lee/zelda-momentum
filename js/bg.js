const images = [
    "url('./img/2.jpg')",
    "url('./img/5.jpg')",
    "url('./img/6.jpg')",
    "url('./img/7.jpg')",
    "url('./img/8.jpg')",
];

const chosenImage = images[Math.floor(Math.random()*images.length)];
console.log(chosenImage);
document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), ${chosenImage}`;
document.body.style.backgroundSize = "cover";