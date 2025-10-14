<?php
header("Content-Type: application/json");
require_once __DIR__ . '/../utils/validation.php';
require_once __DIR__ . '/../database/database_connect.php';

// Error handler function
function handleError($message, $code = 400) {
    http_response_code($code);
    echo json_encode(['error' => $message]);
    exit;
}

try {
    $input = json_decode(file_get_contents('php://input'), true);

    // Input validation using validation.php (example: validate email format)
    if (empty($input['email']) || empty($input['password'])) {
        handleError('Email and password required', 400);
    }
    if (!isValidEmail($input['email'])) { // Assuming isValidEmail exists in validation.php
        handleError('Invalid email format', 400);
    }

    // Database operation
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$input['email']]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($input['password'], $user['password_hash'])) {
        handleError('Invalid credentials', 401);
    }

    // Successful login
    echo json_encode([
        'success' => true,
        'user' => [
            'id' => $user['id'],
            'name' => $user['name']
        ]
    ]);
} catch (Exception $e) {
    handleError('Server error: ' . $e->getMessage(), 500);
}
?>
