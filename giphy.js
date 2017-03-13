
$(document).ready(function(){

// declaring array of topics

var topics = ["dogs","cats","zebras","tigers","lions","cheetas","donkeys","seals","turtles","monkeys"];
	
// looping through array and creating buttons for each of them


for (var i = 0; i < topics.length; i++) {
	
	var buttons = $("<button class='button'>" + topics[i] + "</button>");
	buttons.appendTo($(".buttons"));

}

// created a function that will take a topic and display the first 10 objects laoded from the api

function searchTopic(topic){

var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC";  

$.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
    	

	 	for (var i = 0; i < 10; i++) {
	 	 	response.data[i]
	 	 	console.log(response.data[i]);
	 	 	var myImage = $("<img src='" + response.data[i].images.original_still.url + "'style='max-width:200px;'>");
			myImage.addClass('giphyImage');
			myImage.attr('data-still', response.data[i].images.original_still.url);
			myImage.attr('data-moving', response.data[i].images.original.url);
			myImage.appendTo($(".giphys"));

	 	}

  });

}


$(document).on("click", ".button", function(){
	$(".giphys").html("");
	var text = $(this).text();
	searchTopic(text);
	
});

$(document).on("click", ".giphyImage", function() {
	
	
	var dataMoving = ($(this).attr("data-moving"));
	var dataStill = ($(this).attr("data-still"));
	$(this).attr("src", dataMoving);
	

})

	$(".search").on("click", function(){
	var search = $("#usr").val().trim();
	topics.push(search);
	console.log(search);
	$(".buttons").append("<button class='button'>" + search + "</button>");

	

});




});




