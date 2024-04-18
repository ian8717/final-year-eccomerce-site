// Get the form element
const contactForm = document.getElementById('contact-form');

// Add event listener for form submission
contactForm.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Gather form data
    const formData = new FormData(contactForm);
    
    // Convert form data to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    // Submit the form data
    submitForm(jsonData);
});

// Function to submit the form data
function submitForm(formData) {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Configure the request
    xhr.open('POST', 'contact.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Set up the onload callback function
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Request was successful
            alert('Inquiry submitted successfully');
            contactForm.reset(); // Reset the form
        } else {
            // Request failed
            alert('Failed to submit inquiry. Please try again later.');
        }
    };

    // Set up the onerror callback function
    xhr.onerror = function() {
        alert('Failed to submit inquiry. Please try again later.');
    };

    // Send the request with the form data as JSON
    xhr.send(JSON.stringify(formData));
}
