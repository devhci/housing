

<?php

 
if (strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') { 
 $json = $_POST['json'];
   $obj = json_decode($json);

     $Name=$obj->{'name'};
     $Email=$obj->{'email'}; 
     $Phone=$obj->{'phone'};
     $Comment=$obj->{'comments'};

  
  

$sql = "INSERT INTO NeedFlatInfo ".
       "(Name,Email, Phone,Comment) ".
       "VALUES ".
        "('$Name','$Email','$Phone','$Comment')";

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