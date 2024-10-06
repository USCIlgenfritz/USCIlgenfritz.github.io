class Bird {
    constructor(name, image, habitat, diet, lifespan, size, fact) {
        this.name = name;
        this.image = image;
        this.habitat = habitat;
        this.diet = diet;
        this.lifespan = lifespan;
        this.size = size;
        this.fact = fact;
    }

    getSection() {
        return `
            <div class="bird" onclick="showBird('${this.name}')">
                <h3>${this.name}</h3>
                <img src="images/${this.image}" alt="${this.name}">
            </div>
        `;
    }

    getExpandedSection() {
        return `
            <div>
                <h2>${this.name}</h2>
                <p><strong>Size:</strong> ${this.size}</p>
                <p><strong>Lifespan:</strong> ${this.lifespan}</p>
                <p><strong>Diet:</strong> ${this.diet}</p>
                <p><strong>Habitat:</strong> ${this.habitat}</p>
                <p><strong>Interesting Fact:</strong> ${this.fact}</p>
            </div>
            <img src="images/${this.image}" alt="${this.name}">
        `;
    }
}

// Array
const birds = [
    new Bird('Hummingbird', 'hummingbird.jpg', 'Gardens, forests', 'Nectar, insects', '3-5 years', '7.5-13 cm', 'Can hover in mid-air due to rapid wing flapping.'),
    new Bird('Blue Jay', 'bluejay.jpg', 'Woodlands, parks', 'Nuts, seeds, insects', '7 years', '25-30 cm', 'Known for their intelligence and complex social behavior.'),
    new Bird('Cardinal', 'cardinal.jpg', 'Woodlands, gardens', 'Seeds, fruits', '3 years', '21-30 cm', 'Males are known for their bright red color.'),
    new Bird('Robin', 'robin.jpg', 'Gardens, fields', 'Insects, fruits', '2 years', '25-28 cm', 'Often considered a symbol of spring.')
];

// Displays birds
function displayBirds() {
    const container = document.getElementById('birds-container');
    birds.forEach(bird => {
        container.innerHTML += bird.getSection();
    });
}

// Shows information
function showBird(birdName) {
    const bird = birds.find(b => b.name === birdName);
    const birdsDetail = document.getElementById('birds-detail');
    birdsDetail.innerHTML = bird.getExpandedSection();
    document.getElementById('birds').style.display = 'block';
}

document.getElementById('close-birds').onclick = function() {
    document.getElementById('birds').style.display = 'none';
}

displayBirds();
