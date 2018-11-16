<?php
include '../conn.php';

$user = $headers['Token'];

$result = $conn->query("SELECT name FROM dbserver.database WHERE user='$user'");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '"'  . $rs["name"] . '"';
}
$outp ='{"data":['.$outp.']}';
$conn->close();

echo($outp);
?>