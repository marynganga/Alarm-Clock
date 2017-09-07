// Call on the input clearing function
var formClearance = require('./../js/alarm.js').formClearanceModule;
// Call on the CurrentTime constructor
var Time = require('./../js/alarm.js').timeModule;


Time();
  
  $(document).ready(function() {
  	// Create a new object using Time constructor
  	var currentTime  = new Time();
  	// Display the current Time
  	datetime = $('.countDown');
  	// Call the update prototype
    currentTime.update();
    // Set interval for updating time
   	setInterval(currentTime.update, 1000);
 
	
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

	// Clear the previously filled input by calling the function clearForm to empty out the input field
        formClearance("input");
    });

});