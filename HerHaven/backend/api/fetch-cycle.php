
   <?php
// fetch-cycle.php - Fetches cycle data for a specific user

include 'connect.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $userId = isset($_GET['userId']) ? $conn->real_escape_string($_GET['userId']) : '';

    if (empty($userId)) {
        echo json_encode(['success' => false, 'message' => 'User ID is required.']);
        exit();
    }

    // SQL to fetch cycle logs for the user from CycleLogs table
    $sql = "SELECT CycleID, StartDate, EndDate, Symptoms, Mood, FlowLevel, Notes, CreatedAt
            FROM CycleLogs
            WHERE UserID = ?
            ORDER BY StartDate DESC"; // Order by start date descending

    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        error_log("Prepare failed: " . $conn->error);
        echo json_encode(['success' => false, 'message' => 'Database error during preparation.']);
        exit();
    }

    $stmt->bind_param("i", $userId); // 'i' for integer UserID
    $stmt->execute();
    $result = $stmt->get_result();

    $cycleLogs = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $cycleLogs[] = $row;
        }
        echo json_encode(['success' => true, 'data' => $cycleLogs]);
    } else {
        echo json_encode(['success' => true, 'data' => [], 'message' => 'No cycle data found for this user.']);
    }

    $stmt->close();

} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method. Only GET is allowed.']);
}

$conn->close();
?>
