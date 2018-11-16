<?php
include '../conn.php';

$user = $headers['Token'];
$username = $headers['Username'];
$db = $headers['Database'];

$result = $conn->query("INSERT INTO dbserver.database(user,name) VALUES ($user,'$db') ");
if ($result > 0) {
    $result = $conn->query("CREATE DATABASE $db;");
    $result = $conn->query("GRANT ALL ON $db.* TO '$username'@'%';");
    if ($result > 0) echo('{"status":"201"}');
    else echo('{"status":"500"}');
    $result = $conn->query("FLUSH PRIVILEGES;");
} else echo('{"status":"501"}');
?>