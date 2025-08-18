<?php
header("Content-Type: application/json");
require_once '../database/db_connect.php';

session_start();
if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

// Handle period logging
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $stmt = $pdo->prepare("INSERT INTO period_entries (user_id, start_date, flow_level) VALUES (?, ?, ?)");
    $stmt->execute([$_SESSION['user_id'], $data['startDate'], $data['flow']]);
    echo json_encode(['success' => true]);
}
?>
