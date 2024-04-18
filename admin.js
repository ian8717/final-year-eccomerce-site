document.addEventListener('DOMContentLoaded', function() {

    // Function to load and display bookings
    function loadBookings() {
        var bookingList = document.getElementById('booking-list');
        // Fetch bookings from the server (not implemented here, using dummy data for demonstration)
        var bookings = [
            { id: 1, clientName: 'John Doe', date: '2024-04-01', time: '10:00 AM', status: 'Pending' },
            { id: 2, clientName: 'Jane Smith', date: '2024-04-02', time: '2:00 PM', status: 'Approved' }
        ];

        bookings.forEach(function(booking) {
            var bookingItem = document.createElement('div');
            bookingItem.innerHTML = `
                <p><strong>Client Name:</strong> ${booking.clientName}</p>
                <p><strong>Date:</strong> ${booking.date}</p>
                <p><strong>Time:</strong> ${booking.time}</p>
                <p><strong>Status:</strong> ${booking.status}</p>
                <button class="approve-button" onclick="approveBooking(${booking.id})">Approve</button>
            `;
            bookingList.appendChild(bookingItem);
        });
    }

    // Load initial bookings
    loadBookings();

    // Function to handle booking approval
    function approveBooking(bookingId) {
        console.log('Booking Approved:', bookingId);
        // Update booking status in the database (not implemented here)
    }

    // Function to load and display orders
    function loadOrders() {
        var orderList = document.getElementById('order-list');
        // Fetch orders from the server (not implemented here, using dummy data for demonstration)
        var orders = [
            { id: 1, totalPrice: '$150.00', address: '123 Main St, Anytown', phoneNumber: '555-555-5555', email: 'john@example.com' },
            { id: 2, totalPrice: '$200.00', address: '456 Elm St, Othertown', phoneNumber: '555-555-1234', email: 'jane@example.com' }
        ];

        orders.forEach(function(order) {
            var orderItem = document.createElement('div');
            orderItem.innerHTML = `
                <p><strong>Total Price:</strong> ${order.totalPrice}</p>
                <p><strong>Address:</strong> ${order.address}</p>
                <p><strong>Phone Number:</strong> ${order.phoneNumber}</p>
                <p><strong>Email Address:</strong> ${order.email}</p>
            `;
            orderList.appendChild(orderItem);
        });
    }

    // Load initial orders
    loadOrders();

    // Function to handle adding a new product
    function addProduct(event) {
        event.preventDefault();
        // Retrieve form data
        var imageInput = document.getElementById('product-image');
        var nameInput = document.getElementById('product-name');
        var priceInput = document.getElementById('product-price');
        var descriptionInput = document.getElementById('product-description');

        // Perform validation and send data to the server or update the page
        console.log('Product Added:', {
            image: imageInput.files[0], // This would be handled differently in a real scenario
            name: nameInput.value,
            price: priceInput.value,
            description: descriptionInput.value
        });

        // Clear the form fields after submission
        imageInput.value = '';
        nameInput.value = '';
        priceInput.value = '';
        descriptionInput.value = '';
    }

    // Attach event listener to the product form
    var productForm = document.getElementById('product-form');
    productForm.addEventListener('submit', addProduct);

    // Function to load and display enquiries
    function loadEnquiries() {
        var enquiryList = document.getElementById('enquiry-list');
        // Fetch enquiries from the server (not implemented here, using dummy data for demonstration)
        var enquiries = [
            { id: 1, question: 'Can I get a discount on bulk orders?', email: 'customer@example.com' },
            { id: 2, question: 'Do you offer installation services?', email: 'client@example.com' }
        ];

        enquiries.forEach(function(enquiry) {
            var enquiryItem = document.createElement('div');
            enquiryItem.classList.add('enquiry-item'); // Add a class for styling
            enquiryItem.innerHTML = `
                <p><strong>Question:</strong> ${enquiry.question}</p>
                <p><strong>Email:</strong> ${enquiry.email}</p>
                <div class="enquiry-response">
                    <textarea placeholder="Type your response here..." id="response-${enquiry.id}"></textarea>
                    <button onclick="respondToEnquiry(${enquiry.id})">Send Response</button>
                </div>
            `;
            enquiryList.appendChild(enquiryItem);
        });
    }

    // Load initial enquiries
    loadEnquiries();

    // Function to handle sending a response to an enquiry
    function respondToEnquiry(enquiryId) {
        var enquiryResponseTextArea = document.getElementById(`response-${enquiryId}`);
        var response = enquiryResponseTextArea.value;
        console.log('Response to enquiry ID', enquiryId, ':', response);
        // Send response to the server (not implemented here)
    }

});
