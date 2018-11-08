$(document).ready(function () {

	//$(".calculate").keydown(function(e){
	//		console.log(e.which);             //to find out what is keycode of keyboards numbers and symbols
	//	});


	/*constants*/

	var $initialCal = "";
	var $prevNumber = 0;
	var $nextNumber = 0;
	var $operator = "";




	/*function for using online keyboard*/


	$(".button-holder button").bind("click", function () {

		var $val = $(this).val();

		if (!isNaN($val)) {

			$initialCal += $val;
			$(".calculate").val($initialCal);
			//			console.log($initialCal);

		} else if ($val === "+") {
			$operator = $val;
			$prevNumber = Number($initialCal);
			$initialCal = "";



		} else if ($val === "-") {
			$operator = $val;
			$prevNumber = Number($initialCal);
			$initialCal = "";


		} else if ($val === "*") {
			$operator = $val;
			$prevNumber = Number($initialCal);
			$initialCal = "";


		} else if ($val === "/") {
			$operator = $val;
			$prevNumber = Number($initialCal);
			$initialCal = "";


		} else if ($val === "clear") {

			$initialCal = "";
			$prevNumber = 0;
			$nextNumber = 0;
			$operator = "";
			$(".calculate").val(" ");
			$(".answer").text(" ");



		} else if ($val === "=") {
			$nextNumber = Number($initialCal);


			switch ($operator) {
				case "+":
					$(".answer").text($prevNumber + $nextNumber);
					break;
				case "-":
					$(".answer").text($prevNumber - $nextNumber);
					break;
				case "*":
					$(".answer").text($prevNumber * $nextNumber);
					break;
				case "/":
					$(".answer").text($prevNumber / $nextNumber);
					break;

			}



			
			$initialCal = " ";
			$prevNumber = 0;
			$nextNumber = 0;
			$operator = " ";
			$(".calculate").val(" ");


		}


	});






	/*function for using computer keyboard*/


$(".calculate").keyup(function (e) {
	
	
			var $val = $(".calculate").val();
			
			if (e.which === 187 || e.which === 13) {

			var firstPart,secondPart,answer = 0;

			

			


			if ($val.includes("+")) {
				firstPart = $val.slice(0, $val.indexOf("+"));
				secondPart = $val.slice($val.indexOf("+") + 1, $val.indexOf("="));
				answer = Number(firstPart) + Number(secondPart);
				$(".answer").text(answer);

			



			} else if ($val.includes("-")) {
				firstPart = $val.slice(0, $val.indexOf("-"));
				secondPart = $val.slice($val.indexOf("-") + 1, $val.indexOf("="));

				answer = Number(firstPart) - Number(secondPart);
				$(".answer").text(answer);
				


			} else if ($val.includes("*")) {
				firstPart = $val.slice(0, $val.indexOf("*"));
				secondPart = $val.slice($val.indexOf("*") + 1, $val.indexOf("="));

				answer = Number(firstPart) * Number(secondPart);
				$(".answer").text(answer);
				


			} else if ($val.includes("/")) {
				firstPart = $val.slice(0, $val.indexOf("/"));
				secondPart = $val.slice($val.indexOf("/") + 1, $val.indexOf("="));
				answer = Number(firstPart) / Number(secondPart);
				$(".answer").text(answer);
				


			}
			
			
			$(".calculate").val(" ");
		}
		


	});

//
//$(".calculate").keydown(function () {
//var $val = $(".calculate").val();
//
//		if(isNaN($val)){
//			$(".calculate").addClass("error").val("you should just enter numbers");//validation
//			
//			
//		}else{
//			$(".calculate").removeClass("error");
//		}
//
//
//	});




});
