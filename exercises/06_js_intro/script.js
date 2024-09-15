// script.js
// Author: Connor Ilgenfritz

//Creates button's function
const buttonClick = () => {
    alert("Hello World");
};

//linking button to script.js
const myButton = document.getElementById("btn-click");
const goodbyeButton = document.getElementById("goodbye");
const columnButton = document.getElementById("btn-column");
const animateButton = document.getElementById("surprise-two");

//setting button to have an action on click
//myButton.onclick = buttonClick;

myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone!";
    document.getElementById("stuff").classList.add("special");
};

goodbyeButton.onclick = () => {   
    document.getElementById("message").innerHTML = "Goodbye Everyone!";
    document.getElementById("stuff").classList.remove("special");
};

columnButton.onclick = () => {   
    document.getElementById("message").innerHTML = "Bam Deleted";
    document.getElementById("deleteFoder").parentNode.removeChild(document.getElementById("deleteFoder"));
};