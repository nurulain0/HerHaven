<?php
// add-cycle.php - Adds cycle data to the database

include 'connect.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);

    // Get data from POST request, matching new schema column names
    $userId = isset($data['userId']) ? $conn->real_escape_string($data['userId']) : '';
    $startDate = isset($data['startDate']) ? $conn->real_escape_string($data['startDate']) : '';
    $endDate = isset($data['endDate']) ? $conn->real_escape_string($data['endDate']) : null; // Optional EndDate
    $symptoms = isset($data['symptoms']) ? $conn->real_escape_string($data['symptoms']) : null; // JSON string
    $mood = isset($data['mood']) ? $conn->real_escape_string($data['mood']) : null;
    $flowLevel = isset($data['flowLevel']) ? $conn->real_escape_string($data['flowLevel']) : null;
    $notes = isset($data['notes']) ? $conn->real_escape_string($data['notes']) : null;

    if (empty($userId) || empty($startDate)) {
        echo json_encode(['success' => false, 'message' => 'User ID and Start Date are required.']);
        exit();
    }

    // SQL to insert new cycle log into CycleLogs table
    $sql = "INSERT INTO CycleLogs (UserID, StartDate, EndDate, Symptoms, Mood, FlowLevel, Notes, CreatedAt)
            VALUES (?, ?, ?, ?, ?, ?, ?, NOW())";

    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        error_log("Prepare failed: " . $conn->error);
        echo json_encode(['success' => false, 'message' => 'Database error during preparation.']);
        exit();
    }

    // Bind parameters
    // 's' for string, 'i' for integer, 'd' for double, 'b' for blob
    $stmt->bind_param("issssss", $userId, $startDate, $endDate, $symptoms, $mood, $flowLevel, $notes);

    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Cycle data saved successfully.']);
    } else {
        error_log("Execute failed: " . $stmt->error);
        echo json_encode(['success' => false, 'message' => 'Error saving cycle data: ' . $stmt->error]);
    }

    $stmt->close();

} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method. Only POST is allowed.']);
}

$conn->close();
?>
