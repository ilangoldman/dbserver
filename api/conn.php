<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Expose-Headers: *");
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTION");
header("Content-Type: application/json; charset=UTF-8");
$server = "192.168.0.21";
$conn = new mysqli($server, "root", "r3d3s");

foreach($_SERVER as $key => $value) {
    if (substr($key, 0, 5) <> 'HTTP_') {
        continue;
    }
    $header = str_replace(' ', '-', ucwords(str_replace('_', ' ', strtolower(substr($key, 5)))));
    $headers[$header] = $value;
}
?>