<?php
require_once __DIR__ . '/../utils/validation.php';
require_once __DIR__ . '/../utils/config.php';
require_once __DIR__ . '/../database/queries.php';

$method = $_SERVER['REQUEST_METHOD'];
$user_id = validate_session(); // Custom auth function

switch ($method) {
    case 'GET':
        $period_data = get_period_data($user_id);
        echo json_encode($period_data);
        break;
        
    case 'POST':
        $input = json_decode(file_get_contents('php://input'), true);
        $result = log_period_data($user_id, $input);
        echo json_encode(['success' => $result]);
        break;
        
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
}