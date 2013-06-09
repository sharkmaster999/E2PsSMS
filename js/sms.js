$(document).ready(function(){

	$('#smsSendBtn').click(function(){
		var rec = $('#recipient').val();
		var msg = $('#message').val();

		if(rec == "" || rec == null){

			var err = "All fields are required!";
			alert(err);

            //-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
           // -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
          //  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
            /*$('#recipient').css({"-webkit-box-shadow": "inset 0 1px 1px red, 0 0 8px  rgba(100,0,0,.30)", "-moz-box-shadow": "inset 0 1px 1px  rgba(100,0,0,.30), 0 0 8px  rgba(100,0,0,.30)", " box-shadow":"inset 0 1px 1px red, 0 0 8px red"});
            $('#message').css({"-webkit-box-shadow": "inset 0 1px 1px red, 0 0 8px  rgba(100,0,0,.30)", "-moz-box-shadow": "inset 0 1px 1px  rgba(100,0,0,.30), 0 0 8px red", " box-shadow":"inset 0 1px 1px red, 0 0 8px rgba(100,0,0,.30)"});*/
			return false;

		}else if(msg == "" ){
			var err = "Write something to send!";
			alert(err);
			$('#message').focus();
			return false;
		}else if(rec.length != 7 || isNaN(rec)){

			 alert("Invalid recipient number!");
			 $('#recipient').focus();
			return false;

		} else if(rec.match(/^\s*$/) ||msg.match(/^\s*$/)){
				var err = "No text message to send! ";
				alert(err);
				 $('#message').focus();
				return false;
		}else{
				return true;
		}

	});
});