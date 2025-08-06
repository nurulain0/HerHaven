<?php
// get-articles.php - Fetches articles from the database

include 'connect.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $category = isset($_GET['category']) ? $conn->real_escape_string($_GET['category']) : 'all';

    $sql = "SELECT ArticleID, Title, Author, Category, Content, Source, CreatedAt FROM Articles";

    $params = [];
    $types = "";

    if ($category !== 'all' && !empty($category)) {
        $sql .= " WHERE Category = ?";
        $params[] = $category;
        $types .= "s";
    }

    $sql .= " ORDER BY CreatedAt DESC";

    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        error_log("Prepare failed: " . $conn->error);
        echo json_encode(['success' => false, 'message' => 'Database error during preparation.']);
        exit();
    }

    if (!empty($params)) {
        $stmt->bind_param($types, ...$params);
    }

    $stmt->execute();
    $result = $stmt->get_result();

    $articles = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            // Truncate content for preview
            $row['preview_content'] = substr(strip_tags($row['Content']), 0, 150) . '...';
            unset($row['Content']); // Remove full content from preview list
            $articles[] = $row;
        }
        echo json_encode(['success' => true, 'data' => $articles]);
    } else {
        echo json_encode(['success' => true, 'data' => [], 'message' => 'No articles found.']);
    }

    $stmt->close();

} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method. Only GET is allowed.']);
}

$conn->close();
?>
