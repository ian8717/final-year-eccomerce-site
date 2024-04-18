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

if (isset($_GET['order_id'])) {
    $order_id = $_GET['order_id'];

    // Prepare and execute SQL query
    $stmt = $conn->prepare("SELECT * FROM checkout_details WHERE order_id = ?");
    $stmt->bind_param("i", $order_id);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $order = $result->fetch_assoc();

        // Generate receipt content
        $receiptContent = "Receipt\n\n";
        $receiptContent .= "Order ID: " . $order['order_id'] . "\n";
        $receiptContent .= "Product ID: " . $order['product_id'] . "\n";
        $receiptContent .= "Quantity: " . $order['quantity'] . "\n";
        $receiptContent .= "Total Price: " . $order['total_price'] . "\n";
        $receiptContent .= "Order Date: " . $order['order_date'] . "\n";

        // Set the content type and header for file download
        header('Content-Type: text/plain');
        header('Content-Disposition: attachment; filename="receipt.txt"');

        // Output the receipt content
        echo $receiptContent;
    } else {
        echo "Order not found.";
    }

    // Close statement
    $stmt->close();
} else {
    echo "Invalid request.";
}

// Close connection
$conn->close();
?>
