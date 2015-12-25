var_button0 = document.getElementById("button_0");
var_button1 = document.getElementById("button_1");
var_button2 = document.getElementById("button_2");

var Buttons = [ button_0, button_1, button_2];

//Function is invoked when button images on the web page are clicked
function change_pin( pic ) {
	var request = new XMLHttpRequest();
	request.open( "GET", "gpio.php?pic=" + pic, true);
	request.send(null);

	request.onreadystatechange = function ()  {
	var data = request.responseText;
	if( request.readyState == 4 && request.status  == 200 ) {
	switch ( data ) {
		case "0":
			Buttons[pic].src = "imgs/red/red_"+pic+".jpg";
			break;
		case "1":
			Buttons[pic].src = "imgs/green/green_"+pic+".jpg";
			break;
		case "fail":
			window.alert("Something went wrong. Start debugging, developer");
			break;
		default:
			window.alert("Something went horribly wrong. Start debugging, developer");
			break;
		} // end switch statement

	} // end if statement
	} // end function

request.send(null);
} //end change_pin

