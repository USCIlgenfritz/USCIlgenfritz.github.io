const fetchIceCreams = async () => {
    const url = 'https://portiaportia.github.io/json/ice-creams.json';
    try {
        const response = await fetch(url);
        const data = await response.json();
        showIceCreams(data);
    } catch (error) {
        console.error('Error fetching the data:', error);
    }
};

const showIceCreams = (iceCreams) => {
    const gallery = document.getElementById('gallery');
    iceCreams.forEach((iceCream) => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;
        img.alt = iceCream.name;

        const flavorName = document.createElement('div');
        flavorName.className = 'flavor-name';
        flavorName.innerText = iceCream.name;

        card.appendChild(img);
        card.appendChild(flavorName);
        gallery.appendChild(card);
    });
};

fetchIceCreams();

