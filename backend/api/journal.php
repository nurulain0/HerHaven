<?php
header("Content-Type: application/json");
require_once("../utils/config.php");
require_once("../database/queries.php");
require_once(__DIR__ . '/../utils/validation.php');
require_once(__DIR__ . '/extra.php');

session_start();

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Login request
    if (isset($data['email'], $data['password'])) {
        $user = get_user_by_email($data['email']);
        if (!$user || !password_verify($data['password'], $user['password_hash'])) {
            http_response_code(401);
            echo json_encode(['error' => 'Invalid email or password']);
            exit;
        }
        $_SESSION['user_id'] = $user['id'];
        echo json_encode(['success' => true, 'user' => [
            'id' => $user['id'],
            'name' => $user['name'],
            'email' => $user['email']
        ]]);
        exit;
    }

    // Journal entry creation (must be logged in)
    if (!isset($_SESSION['user_id'])) {
        http_response_code(401);
        echo json_encode(['error' => 'Unauthorized']);
        exit;
    }

    // CSRF protection
    if (empty($data['csrf_token']) || !verifyCSRFToken($data['csrf_token'])) {
        http_response_code(403);
        echo json_encode(['error' => 'Invalid CSRF token']);
        exit;
    }

    $entry = sanitizeInput($data['entry'] ?? '');
    if (empty($entry)) {
        http_response_code(400);
        echo json_encode(['error' => 'Journal entry required']);
        exit;
    }

    $user_id = $_SESSION['user_id'];
    // TODO: Save journal entry to database
    // Example: saveJournalEntry($user_id, $entry);

    echo json_encode(['success' => true, 'message' => 'Journal entry saved']);
    exit;
}

if ($method === 'GET') {
    if (!isset($_SESSION['user_id'])) {
        http_response_code(401);
        echo json_encode(['error' => 'Unauthorized']);
        exit;
    }
    $user_id = $_SESSION['user_id'];
    // TODO: Fetch journal entries from database
    // Example: $entries = getJournalEntries($user_id);
    echo json_encode(['entries' => []]); // Replace with actual entries
    exit;
}

if ($method === 'DELETE') {
    session_destroy();
    echo json_encode(['success' => true]);
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
?>