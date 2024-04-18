<?php
// Database connection details
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

// Escape user inputs for security
$username = $_POST['username'];
$password = $_POST['password'];

// Check if the username and password match a record in the database
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows == 1) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        echo "Login successful";
        // Redirect to the dashboard or another page
        header("Location: product.html");
        exit();
    } else {
        echo "Incorrect password";
        header("Location: login.html");
    }
} else {
    echo "User not found";
}

// Close the connection
$stmt->close();
$conn->close();
?>
