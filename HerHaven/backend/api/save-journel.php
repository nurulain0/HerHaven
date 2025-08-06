<?php
// save-journal.php - Saves a journal entry to the database

include 'connect.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);

    // Get data from POST request, matching new schema column names
    $userId = isset($data['userId']) ? $conn->real_escape_string($data['userId']) : '';
    $entryDate = isset($data['entryDate']) ? $conn->real_escape_string($data['entryDate']) : date('Y-m-d'); // Default to current date if not provided
    $mood = isset($data['mood']) ? $conn->real_escape_string($data['mood']) : null;
    $entryText = isset($data['entryText']) ? $conn->real_escape_string($data['entryText']) : '';
    $affirmationShown = isset($data['affirmationShown']) ? $conn->real_escape_string($data['affirmationShown']) : null;

    if (empty($userId) || empty($entryText)) {
        echo json_encode(['success' => false, 'message' => 'User ID and Entry Text are required for a journal entry.']);
        exit();
    }

    // SQL to insert new journal entry into JournalEnteries table
    $sql = "INSERT INTO JournalEnteries (UserID, EntryDate, Mood, EntryText, AffirmationShown, CreatedAt)
            VALUES (?, ?, ?, ?, ?, NOW())";

    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        error_log("Prepare failed: " . $conn->error);
        echo json_encode(['success' => false, 'message' => 'Database error during preparation.']);
        exit();
    }

    $stmt->bind_param("issss", $userId, $entryDate, $mood, $entryText, $affirmationShown);

    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Journal entry saved successfully.', 'entryId' => $stmt->insert_id]);
    } else {
        error_log("Execute failed: " . $stmt->error);
        echo json_encode(['success' => false, 'message' => 'Error saving journal entry: ' . $stmt->error]);
    }

    $stmt->close();

} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method. Only POST is allowed.']);
}

$conn->close();
?>
