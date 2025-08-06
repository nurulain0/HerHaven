<?php
// affirmations.php - Fetches a random affirmation from the database

include 'connect.php'; // Include database connection
header('Content-Type: application/json');

$affirmationText = "No affirmation found."; // Default message

// SQL to fetch one random affirmation from the Affirmations table
// Using RAND() can be slow on very large tables, consider alternatives for production
$sql = "SELECT Quote FROM Affirmations ORDER BY RAND() LIMIT 1";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $affirmationText = $row['Quote'];
    echo json_encode(['success' => true, 'affirmation' => $affirmationText]);
} else {
    // Fallback to a static message if no affirmations are found in DB
    echo json_encode(['success' => true, 'affirmation' => 'You are strong, capable, and resilient.']);
}

$conn->close();
?>
