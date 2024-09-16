//Java Script
//By Connor Ilgenfritz

//Links Buttons

//Increase Button
const button = document.getElementById('number-button');
const countElement = document.getElementById('increaseMe');
//Refresh Button
const refreshButton = document.getElementById('refresh-button');
const randomImage = document.getElementById('random-image');
//Slider Button
const slider = document.getElementById('slider');
const movingSquare = document.getElementById('moving-square');

//Creates int for Button 1
const numberOfClicks = 1;

//Creates Actions
button.onclick = () => {
    const currentCount = parseInt(countElement.innerText);
    countElement.innerText = currentCount + 1;
};


refreshButton.onclick = () => {
    randomImage.src = `https://picsum.photos/200?random=${Math.random()}`;
};


slider.oninput = () => {
    movingSquare.style.left = `${slider.value}%`;
};