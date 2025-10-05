<?php
header("Content-Type: application/json");
require_once '../database/database connect.php';

$input = json_decode(file_get_contents('php://input'), true);

// Input validation
if (empty($input['email']) || empty($input['password'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Email and password required']);
    exit;
}

// Database operation
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
$stmt->execute([$input['email']]);
$user = $stmt->fetch();

if (!$user || !password_verify($input['password'], $user['password_hash'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid credentials']);
    exit;
}

// Successful login
echo json_encode([
    'success' => true,
    'user' => [
        'id' => $user['id'],
        'name' => $user['name']
    ]
]);
?>
