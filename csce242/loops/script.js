//Created by Connor Ilgenfritz

let drawButton = document.getElementById("drawButton");
let starCountInput = document.getElementById("starCount");
let canvas = document.getElementById("canvas");
let errorMessage = document.getElementById("error");
let starInfo = document.getElementById("starInfo");

drawButton.onclick = () => {
    let starCount = parseInt(starCountInput.value);
    canvas.innerHTML = "";
    errorMessage.textContent = "";

    if (isNaN(starCount) || starCount <= 0) {
        errorMessage.textContent = "Please enter a valid number greater than 0.";
        return;
    }

    for (let i = 0; i < starCount; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.textContent = "*";
        star.style.left = `${Math.random() * (canvas.offsetWidth - 20)}px`;
        star.style.top = `${Math.random() * (canvas.offsetHeight - 20)}px`;

        star.onclick = () => {
            starInfo.textContent = `You clicked on star #${i + 1}`;
        };

        canvas.appendChild(star);
    }
};
