(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


var datetime = null,
        date = null,
        day = null,
        time = null;

function Time(){

};

Time.prototype.update = function () {
	// Clear previously displayed time
	 $('.currentTime').empty();
	 // Assign current time to the date variable
   	date = moment(new Date())
   	// Format the date to display day and time separately
    var day = date.format('dddd, MMMM Do YYYY');
    var time = date.format('h:mm:ss a');
    // Display current day and time
    $('.currentTime').append('<p>'+ day +'<br />' +'The time is: ' + time+'</p>');

};


exports.timeModule = Time;

},{}],2:[function(require,module,exports){
// Call on the input clearing function
var formClearance = require('./../js/alarm.js').formClearanceModule;
// Call on the CurrentTime constructor
var Time = require('./../js/alarm.js').timeModule;

  // Create a new object using Time constructor
  	var currentTime  = new Time();
  	// Call the update prototype
    var updatingTime =  currentTime.update();
    // Set interval for updating time
   	setInterval(currentTime.update, 1000);

  $(document).ready(function() {
  	$('#setAlarmButton').click(function(event) {  // on clicking the button
  		event.preventDefault();
  		// Delete previous output
  		$('.setAlarm').empty();
  		$('.countDown').empty();
  		
  		var setTime = $('#newAlarm').val(); // insert the inputted time in a variable
  		var alarmDate = new Date(setTime); // parse it into the Date constructor
  		// Parse the new  date object into moment and format the date as desired
  		var alarmTime = moment(alarmDate).format('MMMM, Do YYYY, h:mm:ss a'); 
    	// Display the set alarm time
    	$('.setAlarm').append('<p>The alarm is set for: '+alarmTime + '</p>');
    	console.log('after inserting new input'+alarmTime);
    	// Clear the input field
    	$('#newAlarm').val('');

    	// Calculate the time to alarm ring
   		var countingDown = function(){
   			var timeDiff = '';
   			 // console.log('before calculating time diff'+timeDiff);
   			$('.countDown').empty();
   			
       timeDiff = moment(alarmDate).fromNow();
       console.log('after calculating time diff'+timeDiff);
       var timer = setInterval(function(){
      //  // Display time left to the set alarm
      // $('.countDown').append('<p>Time left : '+ timeDiff + '</p>');
      console.log('inside setInterval'+timeDiff);
        if (timeDiff === "a few seconds ago") {
        	console.log('after if '+timeDiff);
       $('.countDown').empty();
        $('.countDown').append('<p>'+'Time\'s up!!'+'</p>');
        console.log('if diff === a few seconds ago '+timeDiff);
   	 clearInterval(timer);
  		// open the overlay section
        $('.overlay').addClass('open');
        // Play the alarm audio
           var audio = new Audio('./assets/sounds/alarm.mp3');
		audio.play();
    	// Close the about overlay
    	$('.closeNav').on('click', function (event) {
        event.preventDefault();
        $('.overlay').removeClass('open');
    	});
      }
      else{
      	timeDiff = '';
       $('.countDown').empty();
       timeDiff = moment(alarmDate).fromNow();
       $('.countDown').append('<p>Time left : '+timeDiff + '</p>');
      }
       },1000);

};
	countingDown();

    	// var x = moment(alarmTime).format('DD, MM, YYYY, HH:mm:ss'); 
    	// var y = moment(now.both).format('DD, MM, YYYY, HH:mm:ss'); 
    	// var w = moment(x).toArray();
    	// var z = moment(y).toArray();
    	// console.log('alarmTime '+w);
    	// console.log('now ' + z);

    	// var difference = z.diff(f);	
    	// console.log(difference);

   

});
  	});
},{"./../js/alarm.js":1}]},{},[2]);
