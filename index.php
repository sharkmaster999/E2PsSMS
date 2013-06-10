
<html>
  <head>
    <script type="text/javascript" src="js/jquery-1.9.1.js"></script>
    <script type="text/javascript" src="js/jquery-ui.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>

    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/sms_header.css">
    <script type="text/javascript" src="js/sms.js"></script>
      <script type='text/javascript'>
          var maxLength=150;
          function charLimit(el) {
              if (el.value.length > maxLength) return false;
              return true;
          }

          function characterCount(el) {
              var charCount = document.getElementById('charCount');
              var msg = $('#message').val();

              if(msg == ""){
                //  alert("wew");
                  $('#message').css({"border-color":"rgba(82, 168, 236, 0.8)","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)"});
                  charCount.innerHTML = maxLength - el.value.length;
                  return false;
              }else if(msg.match(/^\s*$/)){

                  $('#message').css({"border-color":" #b94a48","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)"}).focus();
                  charCount.innerHTML = maxLength - el.value.length;
                  return false;
              }

              if(msg == ""){
                  $('#message').css({"border-color":"rgba(82, 168, 236, 0.8)","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)"});
                  return false;
              }else{
                  $('#message').css({"border-color":"rgba(82, 168, 236, 0.8)","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)"});
              }

              if (el.value.length > maxLength ){
                 // alert("wew!");
                  el.value = el.value.substring(0,maxLength);
              }
              if (charCount){
                  charCount.innerHTML = maxLength - el.value.length;
                  return true;
              }

          }
      </script>
    <title>E2Ps Free SMS</title>
  </head>
 <body>
     <?php include 'layout/sms_header.php'; ?>

    <div class="" style=" margin-top: 50px; margin-left: 50px ; height: 91.9%;border-right: solid 1px rgba(100,100,100,.40); width: 340px; padding-top: 5px;" align="center">
        <div align="left" style="padding-top: 5px; margin-top: 15px; padding-bottom: 5px; margin-left: 15px;margin-right: 15px; margin-bottom: 15px;" >
            <span class="sms_label"><b>Text now for Free!</b></span>
        </div>
        <form action='sendsms.php' method='post' onsubmit="return check(this);">
            <table>
                <tr>
                    <td>Recipient:&nbsp;</td>
                    <td>
                        <select name="prefix" style="width: 80px;">
                            <option value="+63905" disabled="disabled">0905</option>
                            <option value="+63906" disabled="disabled">0906</option>
                            <option value="+63907">0907</option>
                            <option value="+63908">0908</option>
                            <option value="+63909">0909</option>
                            <option value="+63910">0910</option>
                            <option value="+63912">0912</option>
                            <option value="+63915" disabled="disabled">0915</option>
                            <option value="+63916" disabled="disabled">0916</option>
                            <option value="+63917" disabled="disabled">0917</option>
                            <option value="+63918">0918</option>
                            <option value="+63919">0919</option>
                            <option value="+63920">0920</option>
                            <option value="+63921">0921</option>
                            <option value="+63922" disabled="disabled">0922</option>
                            <option value="+63923" disabled="disabled">0923</option>
                            <option value="+63925" disabled="disabled">0925</option>
                            <option value="+63926" disabled="disabled">0926</option>
                            <option value="+63927" disabled="disabled">0927</option>
                            <option value="+63928">0928</option>
                            <option value="+63929">0929</option>
                            <option value="+63930">0930</option>
                            <option value="+63932" disabled="disabled">0932</option>
                            <option value="+63933" disabled="disabled">0933</option>
                            <option value="+63934" disabled="disabled">0934</option>
                            <option value="+63935" disabled="disabled">0935</option>
                            <option value="+63936" disabled="disabled">0936</option>
                            <option value="+63937" disabled="disabled">0937</option>
                            <option value="+63938">0938</option>
                            <option value="+63939">0939</option>
                            <option value="+63942" disabled="disabled">0942</option>
                            <option value="+63943" disabled="disabled">0943</option>
                            <option value="+63946">0946</option>
                            <option value="+63947">0947</option>
                            <option value="+63948">0948</option>
                            <option value="+63949">0949</option>
                            <option value="+63989" disabled="disabled">0989</option>
                            <option value="+63994" disabled="disabled">0994</option>
                            <option value="+63996" disabled="disabled">0996</option>
                            <option value="+63997" disabled="disabled">0997</option>
                            <option value="+63998" disabled="disabled">0998</option>
                            <option value="+63999">0999</option>
                        </select>
                        <input type='text' name='recipient' id="recipient" onkeyup="rec_checkSpace(this)" style="width: 150px;"></td>
                </tr>
                <tr>
                    <td style=""><span style="/*padding-top: 33px; padding-bottom: 33px;*/margin-bottom: 90px; float: left;">Message:&nbsp;</span></td>
                    <td><textarea  onKeyPress="return charLimit(this)" onKeyUp="return characterCount(this)" style="resize: none; width: 233px;" rows=4 cols=100 name='message' id="message"></textarea><br/>
                        <p><strong><span id="charCount">150</span></strong> characters available.</p>
                    </td>
                </tr>
                <tr>
                    <td> </td>
                    <td>
                        <!--<input type="hidden" id="pass" style="width: 80px;" placeholder="Password" title="Under construction pa po !! Sorry sa abala .. :)"/>
                        <input type="hidden" id="re_pass" value="mark"/>-->
                        <input type='submit' name='smsSendBtn' class="btn btn-primary btn-medium" id="smsSendBtn" value='Send'>
                    </td>
                </tr>
            </table>
        </form>
    </div>
 </body>
</html>