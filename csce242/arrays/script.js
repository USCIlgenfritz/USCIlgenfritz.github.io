//Created by Connor Ilgenfritz

let images = [
    {
      src: "images/birthday.jpg",
      title: "Birthday Celebration",
      description: "A joyful birthday celebration with friends and family.",
    },
    {
      src: "images/clown.jpg",
      title: "Funny Clown",
      description: "A clown entertaining kids with tricks and balloons.",
    },
    {
      src: "images/rain.jpg",
      title: "Rainy Day",
      description: "A serene view of rain falling gently on a window.",
    },
    {
      src: "images/read.jpg",
      title: "Reading Time",
      description: "A cozy spot to enjoy a good book.",
    },
    {
      src: "images/shovel.jpg",
      title: "Gardening Tools",
      description: "A shovel ready for some gardening work.",
    },
    {
      src: "images/work.jpg",
      title: "Working Hard",
      description: "A focused individual hard at work on a project.",
    },
  ];
  
  // Function to load images
  function loadImages() {
    let container = document.getElementById("image-container");
    images.forEach((image, index) => {
      let imgElement = document.createElement("div");
      imgElement.className = "image-item";
      imgElement.innerHTML = `<img src="${image.src}" alt="${image.title}" />`;
      imgElement.addEventListener("click", () => showImageInfo(index));
      container.appendChild(imgElement);
    });
  }
  
  // Function to show image title and description
  function showImageInfo(index) {
    let titleElement = document.getElementById("image-title");
    let descriptionElement = document.getElementById("image-description");
    titleElement.textContent = images[index].title;
    descriptionElement.textContent = images[index].description;
  }
  
  // Load images on page load
  window.onload = loadImages;
  