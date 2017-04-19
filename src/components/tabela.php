<?php 
header('Access-Control-Allow-Origin: *'); 
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password, "kohana_db");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

 $sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql) or die("Error in Selecting " . mysqli_error($conn));

 $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }

echo json_encode($emparray);
 ?>