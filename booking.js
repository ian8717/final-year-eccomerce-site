// Get the form element
const bookingForm = document.getElementById('booking-form');

// Add event listener for form submission
bookingForm.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Gather form data
    const formData = new FormData(bookingForm);
    const name = formData.get('name');
    const date = formData.get('date');
    const time = formData.get('time');
    const needFixtures = formData.get('fixture');
    const location = formData.get('location');
    const description = formData.get('description');
    const category = formData.get('category');

    // Construct the summary message
    const summaryMessage = `Name: ${name}\nDate: ${date}\nTime: ${time}\nFixtures Needed: ${needFixtures}\nLocation: ${location}\nDescription: ${description}\nCategory: ${category}`;

    // Display summary message in a dialogue box
    const confirmBooking = confirm(`Please review your booking details:\n\n${summaryMessage}\n\nAre you sure you want to proceed?`);

    // If user confirms, proceed with form submission
    if (confirmBooking) {
        // Submit the form
        submitForm(formData);
    }
});

// Function to submit the form data
function submitForm(formData) {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Configure the request
    xhr.open('POST', 'booking.php', true);

    // Set up the onload callback function
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Request was successful
            alert('Booking successful!');
            bookingForm.reset(); // Reset the form
        } else {
            // Request failed
            alert('Booking failed. Please try again later.');
        }
    };

    // Set up the onerror callback function
    xhr.onerror = function() {
        alert('Booking failed. Please try again later.');
    };

    // Send the request with the form data
    xhr.send(formData);
}
