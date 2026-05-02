// JavaScript code for handling mood selection and displaying destinations

// Sample moods and corresponding destinations
const moods = {
    happy: ['Beach', 'Amusement Park', 'Concert'],
    relaxed: ['Spa', 'Nature Walk', 'Meditation Retreat'],
    adventurous: ['Hiking', 'Skydiving', 'Road Trip'],
    romantic: ['Wine Tasting', 'Candlelit Dinner', 'Beach Sunset']
};

// Function to display destinations based on mood selected
function displayDestinations(selectedMood) {
    const destinationList = document.getElementById('destination-list');
    destinationList.innerHTML = ''; // Clear previous destinations

    const destinations = moods[selectedMood];
    if (destinations) {
        destinations.forEach(destination => {
            const listItem = document.createElement('li');
            listItem.textContent = destination;
            destinationList.appendChild(listItem);
        });
    } else {
        destinationList.textContent = 'No destinations found for this mood.';
    }
}

// Event listener for mood selection
document.getElementById('mood-selector').addEventListener('change', function() {
    displayDestinations(this.value);
});