<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
header("Content-Type: application/json");

// Debugging line - remove after testing
file_put_contents('debug.log', "Request received: " . date('Y-m-d H:i:s') . "\n", FILE_APPEND);

try {
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Simple response for testing
    echo json_encode([
        'success' => true,
        'received_data' => $input,
        'server_time' => date('Y-m-d H:i:s')
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
