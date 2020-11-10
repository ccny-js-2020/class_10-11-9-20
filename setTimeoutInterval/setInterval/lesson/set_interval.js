//every 2 seconds, do this
var num = 0
var interval = setInterval(function(){
	num--;
	console.log("every 2 seconds, do this")
	console.log("num: " + num);
	$("#num-value").text(num)

	//stop the interval once the num gets to 5
	if(num <= -5){
		clearInterval(interval)
		console.log("interval stopped now")
	}
}, 2000)

var timerNumber = 0;
$("#start-timer-button").click(function(){
	var timer = setInterval(function(){
		timerNumber++;
		$("#timer-value").text(timerNumber);
	}, 1000)
})
