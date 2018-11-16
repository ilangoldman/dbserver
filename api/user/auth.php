<?php
include '../conn.php';

$username = $headers['User'];
$pwd = $headers['Pwd'];

$result = $conn->query("SELECT user,name,pname FROM dbserver.user WHERE name='$username' AND pwd='$pwd'");

$outp = "";
if($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    $outp .= '{"name":"'  . $rs["name"] . '",';
    $outp .= '"pname":"'   . $rs["pname"]        . '",';
    $outp .= '"user":"'. $rs["user"]     . '"}';
} else {
    $outp = "{}";
}
$outp ='{"data":'.$outp.'}';
$conn->close();

echo($outp);
?>