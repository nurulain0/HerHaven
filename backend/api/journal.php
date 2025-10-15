<?php
header("Content-Type: application/json");
require_once("../utils/config.php");
require_once("../database/queries.php");
require_once(__DIR__ . '/../utils/validation.php');

session_start();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        
        if (empty($data['email']) || empty($data['password'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Email and password are required']);
            exit;
        }
        
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
        break;
        
    case 'DELETE':
        session_destroy();
        echo json_encode(['success' => true]);
        break;
        
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
}
?>