<?php
include '../conn.php';

$name = $headers['User'];
$pname = $headers['Name'];
$pwd = $headers['Pwd'];

$result = $conn->query("INSERT INTO dbserver.user(name,pname,pwd) VALUES ('$name','$pname','$pwd') ");
if ($result > 0) {
    $result = $conn->query("CREATE USER '$name'@'%' IDENTIFIED BY '$pwd';");
    if ($result > 0) echo('{"status":"201"}');
    else echo('{"status":"500"}');
    $result = $conn->query("FLUSH PRIVILEGES;");
} else echo('{"status":"501"}');
?>