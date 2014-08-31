<?php


 include 'connection.php';
 
  
$selected = mysql_select_db("ncrhousing",$con) 
  or die("Could not select examples");


$result = mysql_query("SELECT * FROM hosingdata");

$json = array();
$total_records = mysql_num_rows($result);

if($total_records >= 1){
  while ($row = mysql_fetch_array($result, MYSQL_ASSOC)){
    $json[] = $row;
  }
}

echo json_encode($json);
?>