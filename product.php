


<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ian";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch products from the database
$sql = "SELECT * FROM products";
$result = $conn->query($sql);

// Check if there are any products
if ($result->num_rows > 0) {
    // Initialize an empty array to store products
    $products = array();

    // Fetch products and add them to the array
    while($row = $result->fetch_assoc()) {
        // Check if the "image_path" column is not null and not empty
        if (!empty($row['image_path'])) {
            // Append the base path to the image path
            $imagePath = '' . $row['image_path'];
        } else {
            // Set a default image path if the "image_path" is null or empty
            $imagePath = 'images/default.jpg'; // Change 'default.jpg' to the default image path
        }

        $product = array(
            'id' => $row['id'],
            'name' => $row['name'],
            'price' => $row['price'],
            'image' => $imagePath
        );
        $products[] = $product;
    }

    // Convert the array to JSON and output it
    header('Content-Type: application/json');
    echo json_encode($products);
} else {
    // If no products are found, output an empty array
    echo json_encode(array());
}

// Close the database connection
$conn->close();
?>



