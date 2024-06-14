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

// SQL query
$sql = "SELECT id, name, email, attendance_status FROM students070624"; // assuming 'email' is the column for email addresses
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    // Fetch all rows and store them in an array
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($data);

$conn->close();