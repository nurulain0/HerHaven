<?php


// Database credentials
$servername = "localhost"; // Default for XAMPP/WAMP
$username = "root";        // Default for XAMPP/WAMP
$password = "";            // Default for XAMPP/WAMP (empty password)
$dbname = "herhaven";      // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    // Log the error (for debugging, don't show detailed error on production)
    error_log("Connection failed: " . $conn->connect_error);
    // Send a generic error response to the frontend
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'message' => 'Database connection error.']);
    exit(); // Stop script execution
}

// Set character set to UTF-8 for proper handling of special characters
$conn->set_charset("utf8mb4");

// For debugging: uncomment to see connection status
// echo "Connected successfully to database: " . $dbname;

?>
