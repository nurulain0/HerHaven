<?php
require_once __DIR__ . '/../utils/validation.php';

function sanitizeInput($data) {
    if (is_array($data)) {
        return array_map('sanitizeInput', $data);
    }
    
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES | ENT_HTML5, 'UTF-8');
    return $data;
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function validatePassword($password) {
    // At least 8 characters, one uppercase, one lowercase, one number
    return preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/', $password);
}

function generateCSRFToken() {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

function verifyCSRFToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

function rateLimit($key, $limit = 5, $timeout = 60) {
    $now = time();
    $requests = $_SESSION['rate_limits'][$key] ?? [];
    
    // Remove old requests
    $requests = array_filter($requests, function($time) use ($now, $timeout) {
        return $time > $now - $timeout;
    });
    
    if (count($requests) >= $limit) {
        return false;
    }
    
    $requests[] = $now;
    $_SESSION['rate_limits'][$key] = $requests;
    return true;
}

function checkAuth() {
    if (!isset($_SESSION['user_id']) || !isset($_SESSION['last_activity'])) {
        return false;
    }
    
    // Session timeout after 30 minutes
    if (time() - $_SESSION['last_activity'] > 1800) {
        session_unset();
        session_destroy();
        return false;
    }
    
    // Update last activity time
    $_SESSION['last_activity'] = time();
    return true;
}
?>