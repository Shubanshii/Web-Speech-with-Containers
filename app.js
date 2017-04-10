console.log("working");
$(document).ready(function(){
	$(".submitButton").on("click", function() {
		$("#info, .right, #results, .center, button").hide();
		console.log($("#results").text().split(" ").length); 
		var divCount = $("#results").text().split(" ").length;	
		var container = $('<div />');
		for (i = 1; i <= divCount; i++) { 
			container.append('<div class="Div ' + i + '">Div ' + i + '</div>');

		}
		$('div').html(container);

	})
	     

})