<?php
include '../conn.php';

$user = $headers['Token'];
$db = $headers['Database'];

$result = $conn->query("SELECT `database`,name FROM dbserver.database WHERE user='$user'");

// echo($result);
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($rs["name"] == $db) {
        // $drop = ;
        if ($conn->query("DROP DATABASE $db;") > 0) {
            $id = $rs["database"];
            $del = $conn->query("DELETE FROM dbserver.database WHERE `database`='$id'");
            echo('{"status":"201"}');
        }
        else echo('{"status":"404"}');
    }
}
$conn->close();

// echo($outp);
// while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
//     if ($rs["name"] == $db) {
//         $result = $conn->query("DROP DATABASE $db;");
//         if ($result > 0) echo('{"status":"201"}');
//         else echo('{"status":"404"}');
//     }
// }
?>