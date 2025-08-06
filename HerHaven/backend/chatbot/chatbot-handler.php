<?php
// chatbotlogs.php - Saves chatbot conversation logs to the database

include 'connect.php'; // Include database connection
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);

    // Get data from POST request, matching new schema column names
    $userId = isset($data['userId']) ? $conn->real_escape_string($data['userId']) : '';
    $question = isset($data['question']) ? $conn->real_escape_string($data['question']) : '';
    $botResponse = isset($data['botResponse']) ? $conn->real_escape_string($data['botResponse']) : '';

    if (empty($userId) || empty($question) || empty($botResponse)) {
        echo json_encode(['success' => false, 'message' => 'User ID, question, and bot response are required.']);
        exit();
    }

    // SQL to insert new chat log into ChatbotLogs table
    $sql = "INSERT INTO ChatbotLogs (UserID, Question, BotResponse, CreatedAt)
            VALUES (?, ?, ?, NOW())";

    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        error_log("Prepare failed: " . $conn->error);
        echo json_encode(['success' => false, 'message' => 'Database error during preparation.']);
        exit();
    }

    // Bind parameters: 'i' for integer, 's' for string
    $stmt->bind_param("iss", $userId, $question, $botResponse);

    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Chat log saved successfully.', 'chatId' => $stmt->insert_id]);
    } else {
        error_log("Execute failed: " . $stmt->error);
        echo json_encode(['success' => false, 'message' => 'Error saving chat log: ' . $stmt->error]);
    }

    $stmt->close();

} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method. Only POST is allowed.']);
}

$conn->close();
?>
