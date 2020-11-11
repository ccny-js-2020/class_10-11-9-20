/*
  Instructions:
  - When the html element with an id of 'add-button' is clicked
    1. Store the value of the input in a variable
    2. Create a new button
      - add text to that button
      - add a value to that button
      - add a class to that button
    3. Append the new button to the html element with a class of 'buttons-div'
    4. Clear the value of the input
  - When the button that you created through jQuery is clicked
    1. Store the value of that button in variable
    2. Log the value of that button
    3. Get the current text value of the html element with an id of 'sentence-p'
    4. Set the text of the p tag with an id 'sentence-p' to the current text value plus the value of the button that was clicked
*/

$("#add-button").click(function(){
  var inputValue = $("#button-name-input").val();

  var button = $("<button>");
  button.text(inputValue).val(inputValue).addClass("buttons");
  $(".buttons-div").append(button);

  $("#button-name-input").val("");
});

$(document).on("click", ".buttons", function(){
  var buttonValue = $(this).val();
  console.log(buttonValue);
  var currentSentencePText = $("#sentence-p").text();

  $("#sentence-p").text(currentSentencePText + " " + buttonValue);
});
