<?php
// Database connection parameters
$host = 'localhost';
$dbname = 'herhaven';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Log the error to a file
    error_log(date('[Y-m-d H:i:s] ') . "Database connection failed: " . $e->getMessage() . "\n", 3, __DIR__ . '/db_error.log');
    // Show a generic error message to the user
    die("Sorry, we are experiencing technical difficulties. Please try again later.");
}
?>
