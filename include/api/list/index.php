
<?php

 
if (strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') { 
 $json = $_POST['json'];
   $obj = json_decode($json);

     $Name=$obj->{'name'};
     $Email=$obj->{'email'}; 
     $Phone=$obj->{'phone'};
     $Address=$obj->{'address'};

 include '../need/connection.php';
 
  
$selected = mysql_select_db("ncrhousing",$con) 
  or die("Could not select examples");

  
  

$sql = "INSERT INTO ListFlatInfo ".
       "(Name,Email, Phone,Address) ".
       "VALUES ".
        "('$Name','$Email','$Phone','$Address')";

$retval = mysql_query( $sql, $con );
if(! $retval )
{
  die('Request Couldnot Be recorded ' . mysql_error());
  
}
mysql_close($con); 
}
else
   {header("Location: http://ncrhousing.co.in"); /* Redirect browser */

/* Make sure that code below does not get executed when we redirect. */
exit;
}
  
?>