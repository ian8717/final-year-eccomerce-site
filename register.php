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

// Prepare and bind SQL statement
$stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $email, $hashed_password);

// Escape user inputs for security
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];

// Hash the password
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Check if passwords match
if (!password_verify($confirm_password, $hashed_password)) {
    die("Passwords do not match");
}

// Execute SQL statement
if ($stmt->execute() === TRUE) {
    // Registration successful
    echo "<script>alert('Registration successful. Redirecting to login page.'); window.location.href = 'login.html';</script>";
} else {
    // Registration failed
    echo "<script>alert('Registration failed. Please try again.');</script>";
}

// Close the connection
$stmt->close();
$conn->close();
?>
