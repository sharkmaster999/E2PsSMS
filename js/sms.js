$(document).ready(function(){

	$('#smsSendBtn').click(function(){
		var rec = $('#recipient').val();
		var msg = $('#message').val();

		if(rec == "" || rec == null){

			var err = "All fields are required!";
			alert(err);

            if(msg != ""){
             //  alert("wew!");
                $('#message').css({"-webkit-transition":"border linear 0.2s, box-shadow linear 0.2s","-moz-transition":"border linear 0.2s, box-shadow linear 0.2s", "-o-transition":"border linear 0.2s, box-shadow linear 0.2s", "transition":"border linear 0.2s, box-shadow linear 0.2s", "background-color":"#ffffff", "border":"1px solid #cccccc","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075)"});

                $('#recipient').css({"border-color":" #b94a48","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)"}).focus();
                return false;
            }

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
            $('#recipient').css({"-webkit-transition":"border linear 0.2s, box-shadow linear 0.2s","-moz-transition":"border linear 0.2s, box-shadow linear 0.2s", "-o-transition":"border linear 0.2s, box-shadow linear 0.2s", "transition":"border linear 0.2s, box-shadow linear 0.2s", "background-color":"#ffffff", "border":"1px solid #cccccc","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075)"});

            $('#message').css({"border-color":" #b94a48","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)"}).focus();
			return false;
		}else if(rec.length != 7 ){

			 alert("Invalid recipient number!");
            $('#recipient').focus().css({"border-color":" #b94a48","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)"});

            $('#message').css({"-webkit-transition":"border linear 0.2s, box-shadow linear 0.2s","-moz-transition":"border linear 0.2s, box-shadow linear 0.2s", "-o-transition":"border linear 0.2s, box-shadow linear 0.2s", "transition":"border linear 0.2s, box-shadow linear 0.2s", "background-color":"#ffffff", "border":"1px solid #cccccc","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075)"});
			return false;

		} else if(rec.match(/^\s*$/) ||msg.match(/^\s*$/)){
				var err = "No text message to send! ";
				alert(err);
                $('#message').focus().css({"border-color":" #b94a48","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)"}).focus();

                $('#recipient').css({"-webkit-transition":"border linear 0.2s, box-shadow linear 0.2s","-moz-transition":"border linear 0.2s, box-shadow linear 0.2s", "-o-transition":"border linear 0.2s, box-shadow linear 0.2s", "transition":"border linear 0.2s, box-shadow linear 0.2s", "background-color":"#ffffff", "border":"1px solid #cccccc","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075)"});
				return false;
		}else{
				return true;
		}

	});
});

    function rec_checkSpace(){
        var rec = $('#recipient').val();

        if(rec == ""){
           // alert('ewe!');
            $('#recipient').css({"-webkit-transition":"border linear 0.2s, box-shadow linear 0.2s","-moz-transition":"border linear 0.2s, box-shadow linear 0.2s", "-o-transition":"border linear 0.2s, box-shadow linear 0.2s", "transition":"border linear 0.2s, box-shadow linear 0.2s", "background-color":"#ffffff", "border":"1px solid #cccccc","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075)"});
            return false;
        }else if(rec.match(/^\s*$/)){

            $('#recipient').css({"border-color":" #b94a48","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)"}).focus();
            return false;
        }

        if(isNaN(rec)){
            //alert('wew');
            $('#recipient').focus().css({"border-color":" #b94a48","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)"});
            return false;
        }else if(rec.length > 7){

            $('#recipient').focus().css({"border-color":" #b94a48","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(236, 100, 0, 0.6)"});
            return false;
        }else{
            $('#recipient').css({"border-color":"rgba(82, 168, 236, 0.8)","-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)", "-moz-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)", " box-shadow":"inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)"});
            return false;
        }
    }