<?php
// add-pregnancy.php - Adds pregnancy data to the database

include 'connect.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);

    // Get data from POST request, matching new schema column names
    $userId = isset($data['userId']) ? $conn->real_escape_string($data['userId']) : '';
    $lastPeriodDate = isset($data['lastPeriodDate']) ? $conn->real_escape_string($data['lastPeriodDate']) : '';
    $dueDate = isset($data['dueDate']) ? $conn->real_escape_string($data['dueDate']) : null;
    $currentWeek = isset($data['currentWeek']) ? (int)$data['currentWeek'] : null;
    $symptoms = isset($data['symptoms']) ? $conn->real_escape_string($data['symptoms']) : null;
    $healthNotes = isset($data['healthNotes']) ? $conn->real_escape_string($data['healthNotes']) : null;

    if (empty($userId) || empty($lastPeriodDate)) {
        echo json_encode(['success' => false, 'message' => 'User ID and Last Period Date are required.']);
        exit();
    }

    // SQL to insert or update pregnancy data into PregenancyLogs table
    // Using INSERT ... ON DUPLICATE KEY UPDATE assuming one entry per user
    $sql = "INSERT INTO PregenancyLogs (UserID, LastPeriodDate, DueDate, CurrentWekk, Symptoms, HealthNotes, CreatedAt)
            VALUES (?, ?, ?, ?, ?, ?, NOW())
            ON DUPLICATE KEY UPDATE
                LastPeriodDate = VALUES(LastPeriodDate),
                DueDate = VALUES(DueDate),
                CurrentWekk = VALUES(CurrentWekk),
                Symptoms = VALUES(Symptoms),
                HealthNotes = VALUES(HealthNotes)";

    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        error_log("Prepare failed: " . $conn->error);
        echo json_encode(['success' => false, 'message' => 'Database error during preparation.']);
        exit();
    }

    $stmt->bind_param("ississ", $userId, $lastPeriodDate, $dueDate, $currentWeek, $symptoms, $healthNotes);

    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Pregnancy data saved successfully.']);
    } else {
        error_log("Execute failed: " . $stmt->error);
        echo json_encode(['success' => false, 'message' => 'Error saving pregnancy data: ' . $stmt->error]);
    }

    $stmt->close();

} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method. Only POST is allowed.']);
}

$conn->close();
?>
