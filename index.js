const reviewContainer = document.getElementById('review-container');

const reviews = [
    {
        img: "https://i.redd.it/cktxvaaierh81.jpg",
        alt: "Profile picture of Angelina Croft",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        name: "Angelina Croft"
    },
    {
        img: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        alt: "Profile picture of Melinia Soft",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        name: "Melinia Glen"
    },
    {
        img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        alt: "Profile picture of Joseph Svelt",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        name: "Joseph Svelt"
    }
];

function populateReviewSection() {
    reviews.forEach(review => {
        // Creating a div for each review card
        const cardElement = document.createElement('div');
        // Adding a class for the created div
        cardElement.classList.add('card');
        // Creating the card element inside its own container
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', review.img);
        imageElement.setAttribute('alt', review.alt)
        imageContainer.append(imageElement);
        // Creating the text review and the reviewer's name
        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = review.text;
        const nameContainer = document.createElement('div');
        nameContainer.classList.add('name-container');
        nameContainer.textContent = review.name;
        cardElement.append(imageContainer, paragraphElement, nameContainer);

        // Putting the cardElement into the reviewContainer using the append() method
        reviewContainer.append(cardElement);
    });
}

populateReviewSection();
