<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Rasberry Pi</title>
	</head>

	<body>
	<?php

	//Sets pins to GPIO pins and stores values in array val_array
	$val_array = array(0,0,0);
	for($i = 0; $i < 3; $i++) {
	system("gpio mode ".$i." out");
	exec("gpio read ".$i, $val_array[$i], $return);
	}

	//Initializes button images and displays them
	for($i = 0; $i < 3; $i++) {
		//if off
		if($val_array[$i][0] == 0) {
		echo("<img id='button_".$i."' src='imgs/red/red_".$i.".jpg' onclick='change_pin(".$i.")' />");
		}

		//if on
		if($val_array[$i][0] == 1) {
		echo("img_id='button_".$i."' src='imgs/green/green_".$i.".jpg' onclick='change_pin(".$i.")' />");
		}
	}
	?>

	<script src="script.js"></script>
	</body>

</html>
