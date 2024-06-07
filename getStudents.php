<?php
// Database credentials
$servername = "localhost";
$username = "root"; // default XAMPP username
$password = ""; // default XAMPP password (empty)
$dbname = "attendance"; // your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query
$sql = "SELECT id, name, attendance_status FROM students"; // assuming 'attendance_status' is the column for attendance
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    // Fetch all rows and store them in an array
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($data);

$conn->close();
?>
