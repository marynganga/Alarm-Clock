(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


function CurrentTime(day, time){
	this.day = moment().format("Do, MMMM, YYYY");
	this.time = moment().format("h:mm:ss a");
	this.both = this.day+', '+this.time;
	}

CurrentTime.prototype.update= function(now) {
    // date = moment(new Date());
    this.day = moment(new Date()).format("Do, MMMM, YYYY");
  	this.time = moment(new Date()).format("h:mm:ss a");
};

//A function to clear the input field after successful submission of a number.
function clearForm(form) {
    $(':input').not(':button, :submit').val('');
};

exports.timeModule = CurrentTime;
exports.formClearanceModule = clearForm;

},{}],2:[function(require,module,exports){
// Call on the input clearing function
var formClearance = require('./../js/alarm.js').formClearanceModule;
// Call on the CurrentTime constructor
var CurrentTime = require('./../js/alarm.js').timeModule;


$(document).ready(function(event) {
	
	var now = new CurrentTime(); //put the current time in a variable
	// display the current time
	var displayTime = $('.currentTime').append('<p>Today is: '+ now.day+'</p>'+'<p>The Time is: '+ now.time+'</p>');
  	
  	$('#setAlarmButton').click(function(event) {  // on clicking the button
  		event.preventDefault();
  		var setTime = $('#newAlarm').val(); // insert the inputted time in a variable
  		var alarmDate = new Date(setTime); // parse it into the Date constructor
  		// Parse the new  date object into moment and format the date as desired
  		var alarmTime = moment(alarmDate).format('Do, MMMM, YYYY, h:mm:ss a'); 
    	// console.log(alarmTime);
    	// Display the set alarm time
    	$('.countDown').append('<p>The set alarm time is : '+alarmTime + '</p>');
    	// Display time from now
    	var countingDown = moment(alarmDate).fromNow();
    	$('.countDown').append('<p>Time left : '+countingDown + '</p>');
    	// console.log(countingDown);
    	if (countingDown === 0) {
    		alert('It\'s '+ alarmTime);
    	}
    	else{
    		return false;
    	}


    	// var x = moment(alarmTime).format('DD, MM, YYYY, HH:mm:ss'); 
    	// var y = moment(now.both).format('DD, MM, YYYY, HH:mm:ss'); 
    	// var w = moment(x).toArray();
    	// var z = moment(y).toArray();
    	// console.log('alarmTime '+w);
    	// console.log('now ' + z);

    	// var difference = z.diff(f);	
    	// console.log(difference);
	});
  	
	//Clear the previously filled input by calling the function clearForm to empty out the input field
        formClearance("input");
});
},{"./../js/alarm.js":1}]},{},[2]);
