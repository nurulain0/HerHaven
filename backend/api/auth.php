<?php
require_once("config.php");

function get_db_connection() {
    static $conn;
    
    if (!isset($conn)) {
        $conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
        
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
    }
    
    return $conn;
}

function get_user_by_email($email) {
    $conn = get_db_connection();
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    return $result->fetch_assoc();
}

function get_cycle_data($user_id, $limit = 10) {
    $conn = get_db_connection();
    $stmt = $conn->prepare("SELECT * FROM cycle_data WHERE user_id = ? ORDER BY start_date DESC LIMIT ?");
    $stmt->bind_param("ii", $user_id, $limit);
    $stmt->execute();
    $result = $stmt->get_result();
    
    $cycles = [];
    while ($row = $result->fetch_assoc()) {
        $cycles[] = $row;
    }
    
    return $cycles;
}

function log_cycle_data($user_id, $start_date, $end_date = null, $flow_intensity = null) {
    $conn = get_db_connection();
    
    // Calculate cycle length if end date is provided
    $cycle_length = null;
    if ($end_date) {
        $start = new DateTime($start_date);
        $end = new DateTime($end_date);
        $cycle_length = $start->diff($end)->days + 1;
    }
    
    $stmt = $conn->prepare("INSERT INTO cycle_data (user_id, start_date, end_date, cycle_length, flow_intensity) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("issii", $user_id, $start_date, $end_date, $cycle_length, $flow_intensity);
    return $stmt->execute();
}

// Additional query functions would be here...
?>