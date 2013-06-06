
<?php

  $sender = $_GET['sender'];
  $message = $_GET['msgdata'];

  if ($sender!='') {
     #
     # Save incoming messages
     #
     $fp = fopen("receivelog.txt","a");
     fputs($fp,"$sender $message\n");
     fclose($fp);

     #
     # Return a response SMS message
     #
     $responsetext = "Thank you for the message!";
     echo "{SMS:TEXT}{}{}{".$sender."}{".$responsetext."}";
  } else {
     echo "The PHP script is ready for accepting messages";
  }

?>