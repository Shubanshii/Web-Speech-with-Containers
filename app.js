$(document).ready(function(){
	
	$(".submitButton").on("click", function() {
		var res = $("#results").text().split(" ");
		console.log(res);

		$.ajax({

    url: 'https://wordsapiv1.p.mashape.com/words/' + $("#results").text() + '', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method
    data: {}, // Additional parameters here
    datatype: 'json',
    success: function(data) {  
    	console.log(data);
    	console.log(data.results[0].definition);

    },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "5QNhUGUmVamshQCbuFO6ykRJBCqFp1nqhQgjsnNahs0JInCns7"); // Enter here your Mashape key
    
    }
});
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