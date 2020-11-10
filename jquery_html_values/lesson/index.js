//Getting Values of HTML Elements

//Getting the text value of the html element with an id of 'p-tag'
var pTagText = $("#p-tag").text();
console.log(pTagText);

$("#one-button").click(function(){
  //'this' is a reference to the html element that has an event being fired upon it
  //in this case, 'this' is the button tag in the html with an id of 'one-button'
  //it would be the same as writing this: console.log($("#one-button").val())
  // console.log($("#one-button").val())
  console.log($(this).val())
});

$(".li-tags").click(function(){
  //'this' is a reference to the html element that has an event being fired upon it
  //in this case, 'this' is the li tag
  //it would be the same as writing this: console.log($(".li-tags").val())
  console.log($(this).val())
});

//Changing Values of HTML Elements

$("#another-button").click(function(){
  //'this' is a reference to the html element that has an event being fired upon it
  //in this case, 'this' is the button tag in the html with an id of 'another-button'
  console.log($(this).val())

  //changing the value of the html that has an event being fired upon it
  //in this case, that html element is the one in the html with an id of 'another-button'
  $(this).val("GOODBYE");
  console.log($(this).val())
});

//Getting the text value of the html element with an id of 'span-tag'
console.log($("#span-tag").text());
//changing the text value of the html element with an id of 'span-tag'
$("#span-tag").text("Falling Away");
//Getting the text value of the html element with an id of 'span-tag'
console.log($("#span-tag").text());

//Getting the value of newly created jquery elements when an event is fired upon them
var buttonOne = $("<button>");
buttonOne.text("here").val("here").addClass("button-click");
var buttonTwo = $("<button>");
buttonTwo.text("there").val("there").addClass("button-click");
$("#new-list").append(buttonOne).append(buttonTwo);
//This is some newer syntax here in order to access items of a class that was created in jQuery
//when a click event is fired upon the jQuery created 'button-click' class
$(document).on("click", ".button-click", function(){
  //getting the value of the html element that is firing the event
  console.log($(this).val());
});

//both of these work right now, but if this one doesnt work
//then try using the syntax above for jquery created elements
$(".button-click").click(function(){
  console.log($(this).val());
});


//Setting values of html elements

//setting the text for the html element with an id of 'span-tag-two'
$("#span-tag-two").text("Setting the span tag text");
//setting the value of input html element
$("input").val("Setting the input tag value")

//after 2 seconds, clear the input value
setTimeout(function(){
  //this is the syntax to make a value nothing
  $("input").val("");
}, 2000)
