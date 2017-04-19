$(document).ready(function(){

function getDefLengths(){
    console.log("test");
}

    $(".submitButton").on("click", function(){
 var wordArray = $(".js-query").val().split(" ");
 wordDefLengths = [];
 definitions = [];

    //console.log(wordArray);
    var word = $(".js-query").val();
    for(var i=0; i < wordArray.length; i++){

            $.ajax({

    url: 'https://wordsapiv1.p.mashape.com/words/' + wordArray[i] + '', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method
    data: {}, // Additional parameters here
    datatype: 'json',
    success: function(data) {  
        console.log(i);
       // console.log(data.results.length);
        
       // defCount = data.results.length;

         //wordDefLengths.push(defCount);
        //for(var i=0; i<defCount; i++){

             //console.log(data.results[i].definition);
          //   definitions.push(data.results[i].definition);
        //}
        //console.log(definitions);
       // console.log(defCount)
        //results = data.results; 
        //newWordDefLengths = wordDefLengths;
       // sortWordSlides();
    },

    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "5QNhUGUmVamshQCbuFO6ykRJBCqFp1nqhQgjsnNahs0JInCns7"); // Enter here your Mashape key
    
    }
}); 

    }
    

    
}) 

})
