<?php
// Database credentials
$servername = "localhost";
$username = "root"; // default XAMPP username
$password = ""; // default XAMPP password (empty)
$dbname = "it-a"; // your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the posted data
$input = file_get_contents('php://input');
$attendanceData = json_decode($input, true);

$response = array();

if ($attendanceData) {
    foreach ($attendanceData as $student) {
        $id = $student['id'];
        $status = $student['status'];
        $sql = "UPDATE students070624 SET attendance_status='$status' WHERE id='$id'";

        if ($conn->query($sql) === TRUE) {
            $response['success'] = true;
        } else {
            $response['success'] = false;
            $response['error'] = $conn->error;
            break;
        }
    }
} else {
    $response['success'] = false;
    $response['error'] = 'No data received';
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($response);
