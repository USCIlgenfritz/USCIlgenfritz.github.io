document.addEventListener("DOMContentLoaded", () => {
    const colorSlider = document.getElementById("red-slider");
    const colorPreview = document.getElementById("color-preview");
    const colorMessage = document.getElementById("color-message");
    const exercise1Btn = document.getElementById("exercise1-btn");
    const exercise2Btn = document.getElementById("exercise2-btn");
    const colorSliderDiv = document.getElementById("color-slider");
    const pictureChooserDiv = document.getElementById("picture-chooser");
    const imageDisplay = document.getElementById("image-display");
    const menuToggle = document.getElementById("menu-toggle");
    const menuItems = document.getElementById("menu-items");

    let colorMessages = [
        "This is a dark red.",
        "This is a medium red.",
        "This is a bright red!"
    ];

    colorSlider.addEventListener("input", () => {
        const redValue = colorSlider.value;
        colorPreview.style.backgroundColor = `rgb(${redValue}, 0, 0)`;
        
        if (redValue < 85) {
            colorMessage.textContent = colorMessages[0]; // Dark red
        } else if (redValue < 170) {
            colorMessage.textContent = colorMessages[1]; // Medium red
        } else {
            colorMessage.textContent = colorMessages[2]; // Bright red
        }
    });

    exercise1Btn.addEventListener("click", () => {
        colorSliderDiv.style.display = "block";
        pictureChooserDiv.style.display = "none";
    });

    exercise2Btn.addEventListener("click", () => {
        colorSliderDiv.style.display = "none";
        pictureChooserDiv.style.display = "block";
    });

    menuToggle.addEventListener("click", () => {
        if (menuItems.style.display === "none" || menuItems.style.display === "") {
            menuItems.style.display = "block";
            menuToggle.textContent = "▲";
        } else {
            menuItems.style.display = "none";
            menuToggle.textContent = "▼";
        }
    });

    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const size = event.target.dataset.size;
            let imgSize;

            if (size === 'small') imgSize = '200';
            else if (size === 'medium') imgSize = '400';
            else if (size === 'large') imgSize = '800';

            imageDisplay.innerHTML = `<img src="https://picsum.photos/${imgSize}" alt="${size} image">`;
        });
    });
});
