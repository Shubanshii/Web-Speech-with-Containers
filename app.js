$(document).ready(function(){
		
	$(".submitButton").on("click", function() {
		divCount = $("#results").text().split(" ").length;
		$("#info, .right, #results, .center, button").hide();
		console.log($("#results").text().split(" ").length); 
		
		var container = $('<div />');
		for (i = 1; i <= divCount; i++) { 
			container.append('<div class="Div-' + i + '">Div ' + i + '</div>');
			
		}

		$('div').html(container);
		
		
		next();

	})

	 function next(){
	 	var i = 1;
	 	$('body').append('<button class="nextButton">Next</button>');
	for(i = 1; i<=divCount; i++){
	if(i>1){
			$(".Div-" + i + "").hide();
		}}
		i=1;
		$(".nextButton").on("click", function(){
			
			$(".Div-" + i + "").hide();
			
			$(".Div-" + (i+1) + "").show();
			i++;
		 })
	}

	     

})