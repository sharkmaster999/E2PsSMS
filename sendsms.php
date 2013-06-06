<?php

########################################################
# Login information for the SMS Gateway
########################################################

$ozeki_user = "admin";
$ozeki_password = "abc123";
$ozeki_url = "http://127.0.0.1:9501/api?";

########################################################
# Functions used to send the SMS message
########################################################
function httpRequest($url){
    $pattern = "/http...([0-9a-zA-Z-.]*).([0-9]*).(.*)/";
    preg_match($pattern,$url,$args);
    $in = "";
    $fp = fsockopen("$args[1]", $args[2], $errno, $errstr, 30);
    if (!$fp) {
       return("$errstr ($errno)");
    } else {
        $out = "GET /$args[3] HTTP/1.1\r\n";
        $out .= "Host: $args[1]:$args[2]\r\n";
        $out .= "User-agent: Ozeki PHP client\r\n";
        $out .= "Accept: */*\r\n";
        $out .= "Connection: Close\r\n\r\n";

        fwrite($fp, $out);
        while (!feof($fp)) {
           $in.=fgets($fp, 128);
        }
    }
    fclose($fp);
    return($in);
}



function ozekiSend($phone, $msg, $debug=false){
      global $ozeki_user,$ozeki_password,$ozeki_url;

      $url = 'username='.$ozeki_user;
      $url.= '&password='.$ozeki_password;
      $url.= '&action=sendmessage';
      $url.= '&messagetype=SMS:TEXT';
      $url.= '&recipient='.urlencode($phone);
      $url.= '&messagedata='.urlencode($msg);

      $urltouse =  $ozeki_url.$url;
      if ($debug) { /*echo "Request: <br>$urltouse<br><br>";*/ }

      //Open the URL to send the message
      $response = httpRequest($urltouse);
      if ($debug) {
          /* echo "Response: <br><pre>".
           str_replace(array("<",">"),array("&lt;","&gt;"),$response).
           "</pre><br>";*/ }

      return true;
}

########################################################
# GET data from sendsms.html
########################################################

$phonenum = $_POST['prefix'] . $_POST['recipient'];
$message = $_POST['message'];
$debug = true;

$result = ozekiSend($phonenum,$message,$debug);

if($result) {
  echo "Message Sent [ <a href='index.php'>Click</a> ] here to text again. Thank you. <br/>";
  echo "<br><b>Reminder</b>: <br>Please use this for smart subscriber only. <br> Gifts for you, unlimited characters allowed :)";
} else {
  echo "Error in sending message. Waray na load bleehhhh :P";
}

?>