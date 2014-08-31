 <?php 
     $con=mysql_connect('localhost', 'ncrhousing', 'CEaaQKZsusa2yc6M' ); 
// Check connection
    if (mysqli_connect_errno())
     {
     echo "Failed to connect to MySQL: " . mysqli_connect_error();
     }else
	   echo "connection success";
   ?> 