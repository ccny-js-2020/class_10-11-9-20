var loaderImg = $("<img>")
loaderImg.attr("src", "https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif");
loaderImg.attr("height", 100).attr("width", 100);
loaderImg.addClass("loader-image");
$(".add-stuff-on").append(loaderImg)

//after 5 seconds of document loading
setTimeout(function(){
	$(".loader-image").hide();

	console.log("this happens after 5 seconds");
	var p = $("<p>");
	p.text(":)")
	$(".add-stuff-on").append(p)
}, 5000);

//after 10 seconds of document loading
setTimeout(function(){
	console.log("this happens after 10 seconds");
	var p = $("<p>");
	p.text(":(")
	$(".add-stuff-on").append(p)
}, 10000);

//after 15 seconds of document loading
setTimeout(function(){
	console.log("this happens after 15 seconds");
	var p = $("<p>");
	p.text(":/")
	$(".add-stuff-on").append(p)
}, 15000);
