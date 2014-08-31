<?php
 
 
if (strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') { 
 $House_id = $_GET["House_id"];

 include 'connection.php';
 
  
$selected = mysql_select_db("ncrhousing",$con) 
  or die("Could not select examples");


$result = mysql_query("SELECT * FROM housingdata where House_id=$House_id");

$json = array();
$total_records = mysql_num_rows($result);

if($total_records == 1){
  while ($row = mysql_fetch_array($result, MYSQL_ASSOC)){
    $json[] = $row;
  }
}

echo json_encode($json);
mysql_close($con);
}

else
{
header("Location: http://ncrhousing.co.in"); /* Redirect browser */

/* Make sure that code below does not get executed when we redirect. */
exit;

}
?>