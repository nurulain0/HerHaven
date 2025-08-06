<?php
// add-reminder.php - Adds a new reminder to the database

include 'connect.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);

    // Get data from POST request, matching new schema column names
    $userId = isset($data['userId']) ? $conn->real_escape_string($data['userId']) : '';
    $title = isset($data['title']) ? $conn->real_escape_string($data['title']) : '';
    $reminderType = isset($data['reminderType']) ? $conn->real_escape_string($data['reminderType']) : '';
    $reminderDateTime = isset($data['reminderDateTime']) ? $conn->real_escape_string($data['reminderDateTime']) : '';
    $isRecurring = isset($data['isRecurring']) ? (int)$data['isRecurring'] : 0; // BIT type, 0 or 1
    $status = isset($data['status']) ? $conn->real_escape_string($data['status']) : 'Pending';

    if (empty($userId) || empty($title) || empty($reminderType) || empty($reminderDateTime)) {
        echo json_encode(['success' => false, 'message' => 'All required reminder fields are missing.']);
        exit();
    }

    // SQL to insert new reminder into Reminders table
    $sql = "INSERT INTO Reminders (UserID, Title, ReminderType, ReminderDateTime, IsRecurring, Status, CreatedAt)
            VALUES (?, ?, ?, ?, ?, ?, NOW())";

    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        error_log("Prepare failed: " . $conn->error);
        echo json_encode(['success' => false, 'message' => 'Database error during preparation.']);
        exit();
    }

    $stmt->bind_param("isssis", $userId, $title, $reminderType, $reminderDateTime, $isRecurring, $status);

    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Reminder added successfully.', 'reminderId' => $stmt->insert_id]);
    } else {
        error_log("Execute failed: " . $stmt->error);
        echo json_encode(['success' => false, 'message' => 'Error adding reminder: ' . $stmt->error]);
    }

    $stmt->close();

} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method. Only POST is allowed.']);
}

$conn->close();
?>
