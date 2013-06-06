$(document).ready(function(){

	$('#smsSendBtn').click(function(){
		var rec = $('#recipient').val();
		var msg = $('#message').val();

		if(rec == "" || msg == "" ){

			var err = "All fields are required!";
			alert(err);
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