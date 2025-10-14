<?php
header("Content-Type: application/json");
require_once("../../utils/config.php");
require_once("../../database/queries.php");
require_once(__DIR__ . '/../utils/validation.php');

session_start();

$data = json_decode(file_get_contents('php://input'), true);

// Input validation
if (empty($data['email']) || empty($data['password'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Email and password are required']);
    exit;
}

if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

$user = get_user_by_email($data['email']);

if (!$user) {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid credentials']);
    exit;
}

if (!password_verify($data['password'], $user['password_hash'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid credentials']);
    exit;
}

// Regenerate session ID for security
session_regenerate_id(true);

$_SESSION['user_id'] = $user['id'];
$_SESSION['user_email'] = $user['email'];
$_SESSION['last_activity'] = time();

// Set secure session cookie params
$cookieParams = session_get_cookie_params();
setcookie(
    session_name(),
    session_id(),
    [
        'expires' => time() + 86400, // 1 day
        'path' => $cookieParams['path'],
        'domain' => $cookieParams['domain'],
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Strict'
    ]
);

echo json_encode([
    'success' => true,
    'user' => [
        'id' => $user['id'],
        'name' => $user['name'],
        'email' => $user['email']
    ]
]);
?>