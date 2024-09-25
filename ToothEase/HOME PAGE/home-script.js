const images = [
    {
        url: 'dental-aesthetics.jpg',
        label: 'Dental Aesthetics Center',
        title: 'Dental Aesthetics Center',
        description: 'A highly professional dental service with a focus on aesthetics.'
    },
    {
        url: 'city-smiles.jpg',
        label: 'City Smiles Dental Clinic',
        title: 'City Smiles Dental Clinic',
        description: 'Your friendly neighborhood dental clinic with a bright and welcoming ambiance.'
    },
    {
        url: 'respall-dental.jpg',
        label: 'Respall Dental Clinic',
        title: 'Respall Dental Clinic',
        description: 'A calming green placeholder image representing tranquility and care in dental service.'
    }
];

// Get the container where images will be displayed
const imageContainer = document.getElementById('image-container');

// Get the modal elements
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modal-image');
const modalDesc = document.getElementById('modal-description');
const modalTitle = document.getElementById('modal-title');
const closeBtn = document.querySelector('.close');

// Loop through the array and create image elements within styled boxes
images.forEach(image => {
    const div = document.createElement('div'); // Create a div for the image box
    div.className = 'image-box'; // Add class for styling

    const img = document.createElement('img'); // Create an image element 
    img.src = image.url; // Set the image source


    // When an image is clicked, open the modal
    img.addEventListener('click', () => {
        modal.style.display = 'flex'; // Show the modal
        modalImg.src = image.url; // Set the modal image source
        modalTitle.textContent = image.title;
        modalDesc.textContent = image.description; // Set the modal description
    });

    const label = document.createElement('label'); // Create a label element
    label.textContent = image.label; // Set the label text to the image label
    label.className = 'image-label'; // Add class for label styling

    div.appendChild(img); // Append the image to the box
    div.appendChild(label); // Append the label below the image
    imageContainer.appendChild(div); // Append the box to the container
});

// Close the modal when the 'X' is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
