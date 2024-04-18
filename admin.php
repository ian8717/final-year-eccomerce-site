<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "ian";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch products
$productsSql = "SELECT * FROM products";
$productsResult = $conn->query($productsSql);

// Fetch bookings
$bookingsSql = "SELECT * FROM booking_data";
$bookingsResult = $conn->query($bookingsSql);

// Fetch contact inquiries
$inquiriesSql = "SELECT * FROM contact_inquiries";
$inquiriesResult = $conn->query($inquiriesSql);

// Fetch checkout details
$checkoutSql = "SELECT * FROM checkout_details";
$checkoutResult = $conn->query($checkoutSql);

// Display data
?>

<!-- HTML code for displaying products -->
<h2>Products</h2>
<table>
    <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Image</th>
    </tr>
    <?php while($product = $productsResult->fetch_assoc()): ?>
    <tr>
        <td><?php echo $product['name']; ?></td>
        <td><?php echo $product['price']; ?></td>
        <td><?php echo $product['quantity']; ?></td>
        <td><img src="<?php echo $product['image_path']; ?>" alt="<?php echo $product['name']; ?>"></td>
    </tr>
    <?php endwhile; ?>
</table>

<!-- HTML code for displaying bookings -->
<h2>Bookings</h2>
<table>
    <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Need Fixtures</th>
        <th>Location</th>
        <th>Description</th>
        <th>Category</th>
    </tr>
    <?php while($booking = $bookingsResult->fetch_assoc()): ?>
    <tr>
        <td><?php echo $booking['name']; ?></td>
        <td><?php echo $booking['date']; ?></td>
        <td><?php echo $booking['time']; ?></td>
        <td><?php echo $booking['need_fixtures']; ?></td>
        <td><?php echo $booking['location']; ?></td>
        <td><?php echo $booking['description']; ?></td>
        <td><?php echo $booking['category']; ?></td>
    </tr>
    <?php endwhile; ?>
</table>

<!-- HTML code for displaying contact inquiries -->
<h2>Contact Inquiries</h2>
<table>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Message</th>
        <th>Inquiry Date</th>
    </tr>
    <?php while($inquiry = $inquiriesResult->fetch_assoc()): ?>
    <tr>
        <td><?php echo $inquiry['name']; ?></td>
        <td><?php echo $inquiry['email']; ?></td>
        <td><?php echo $inquiry['phone']; ?></td>
        <td><?php echo $inquiry['message']; ?></td>
        <td><?php echo $inquiry['inquiry_date']; ?></td>
    </tr>
    <?php endwhile; ?>
</table>

<!-- HTML code for displaying checkout details -->
<h2>Checkout Details</h2>
<table>
    <tr>
        <th>Total Price</th>
        <th>Total Quantity</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Purchase Date</th>
    </tr>
    <?php while($checkout = $checkoutResult->fetch_assoc()): ?>
    <tr>
        <td><?php echo $checkout['total_price']; ?></td>
        <td><?php echo $checkout['total_quantity']; ?></td>
        <td><?php echo $checkout['address']; ?></td>
        <td><?php echo $checkout['phone']; ?></td>
        <td><?php echo $checkout['email']; ?></td>
        <td><?php echo $checkout['purchase_date']; ?></td>
    </tr>
    <?php endwhile; ?>
</table>

<?php
// Close connection
$conn->close();
?>
