$(document).ready(function(){

	$('#smsSendBtn').click(function(){
		var rec = $('#recipient').val();
		var msg = $('#message').val();

		if(rec == "" || rec == null){

			var err = "All fields are required!";
			alert(err);

            /*
             background-color: #ffffff;
             border: 1px solid #cccccc;
             -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
             -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
             box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
             -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;
             -moz-transition: border linear 0.2s, box-shadow linear 0.2s;
             -o-transition: border linear 0.2s, box-shadow linear 0.2s;
             transition: border linear 0.2s, box-shadow linear 0.2s;
             */

            //border-color: rgba(82, 168, 236, 0.8);
            // border-color: #b94a48;
           // -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
          //  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
           // box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
            $('#recipient').css({"border-color":" #b94a48","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)"}).focus();
            $('#message').css({"border-color":" #b94a48","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)"});
			return false;

		}else if(msg == "" ){
			var err = "Write something to send!";
			alert(err);
            $('#message').css({"border-color":" #b94a48","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)"}).focus();
			return false;
		}else if(rec.length != 7 || isNaN(rec)){

			 alert("Invalid recipient number!");
            $('#recipient').focus().css({"border-color":" #b94a48","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)"});
			return false;

		} else if(rec.match(/^\s*$/) ||msg.match(/^\s*$/)){
				var err = "No text message to send! ";
				alert(err);
                $('#message').focus().css({"border-color":" #b94a48","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)"}).focus();
				return false;
		}else{
				return true;
		}

	});
});

    function check(){
        var pass = $('#pass').val();
        var re_pass = $('#re_pass').val();

        if(pass != re_pass){
            alert("Under construction pa po !! Sorry sa abala .. :)");
            return false;
        }
    }

    function msg_checkSpace(){
        var msg = $('#message').val();
        if(msg.match(/^\s*S/)) {
            $('#message').css({"-webkit-transition":"border linear 0.2s, box-shadow linear 0.2s","-moz-transition":"border linear 0.2s, box-shadow linear 0.2s", "-o-transition":"border linear 0.2s, box-shadow linear 0.2s", "transition":"border linear 0.2s, box-shadow linear 0.2s", "background-color":"#ffffff", "border":"1px solid #cccccc","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075)"});
            return false;
        } else if(msg.length > 0){
            $('#message').css({"border-color":"rgba(82, 168, 236, 0.8)","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)"});
            return false;
        }else{

            $('#message').css({"-webkit-transition":"border linear 0.2s, box-shadow linear 0.2s","-moz-transition":"border linear 0.2s, box-shadow linear 0.2s", "-o-transition":"border linear 0.2s, box-shadow linear 0.2s", "transition":"border linear 0.2s, box-shadow linear 0.2s", "background-color":"#ffffff", "border":"1px solid #cccccc","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075)"});
            return false;
        }
    }

function rec_checkSpace(){
    var rec = $('#recipient').val();

    if(rec.length > 0 && rec.length <7){

        $('#recipient').css({"border-color":"rgba(82, 168, 236, 0.8)","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)"});
        return false;
    }else{

        $('#recipient').css({"-webkit-transition":"border linear 0.2s, box-shadow linear 0.2s","-moz-transition":"border linear 0.2s, box-shadow linear 0.2s", "-o-transition":"border linear 0.2s, box-shadow linear 0.2s", "transition":"border linear 0.2s, box-shadow linear 0.2s", "background-color":"#ffffff", "border":"1px solid #cccccc","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075)"});
        return false;
    }
}