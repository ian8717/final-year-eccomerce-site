<?php
// Retrieve form data
$name = $_POST['name'];
$date = $_POST['date'];
$time = $_POST['time'];
$needFixtures = $_POST['fixture'];
$location = $_POST['location'];
$description = $_POST['description'];
$category = $_POST['category'];

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
$sql = "INSERT INTO booking_data (name, date, time, need_fixtures, location, description, category)
        VALUES ('$name', '$date', '$time', '$needFixtures', '$location', '$description', '$category')";

if ($conn->query($sql) === TRUE) {
    echo "Booking data inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
