<?php
// Get the JSON data sent from JavaScript
$jsonData = file_get_contents('php://input');

// Decode JSON data into associative array
$data = json_decode($jsonData, true);

// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ian";


$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute the SQL query to insert data into the database
$sql = "INSERT INTO contact_inquiries (name, email, phone, message) 
        VALUES ('".$data['name']."', '".$data['email']."', '".$data['phone']."', '".$data['message']."')";

if ($conn->query($sql) === TRUE) {
    echo "Inquiry submitted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
