<?php




$name = $_POST['name'];
$mailFrom = $_POST['email'];
$message = $_POST['message'];
$subject = "BPC Website Inquiry";

$mailTo = "info@balkanphys.com";
$headers = "From : ".$mailFrom;
$txt = "You have recieved an e-mail from: ".$name.".\n\n".$message;

mail($mailTo, $subject, $txt, $headers);


function_alert("Thank you for your submit, we will respond to you as soon as possible!");

function function_alert($msg) {
    echo "<script type='text/javascript'>
     window.location.href = 'contact.html';
 alert('$msg');
    

   
  </script>";
}

?>