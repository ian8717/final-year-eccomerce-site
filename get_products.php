<?php
// Include database configuration
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
$sql = "SELECT * FROM products";
$result = $conn->query($sql);

$products = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $product = array(
            'id' => $row['id'],
            'name' => $row['name'],
            'price' => $row['price'],
            'image' => $row['image_path']
        );
        $products[] = $product;
    }
}

// Close connection
$conn->close();

// Output products as JSON
header('Content-Type: application/json');
echo json_encode($products);
?>
