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
  		$('.countDown').empty();
  		var setTime = $('#newAlarm').val(); // insert the inputted time in a variable
  		var alarmDate = new Date(setTime); // parse it into the Date constructor
  		// Parse the new  date object into moment and format the date as desired
  		var alarmTime = moment(alarmDate).format('MMMM, Do YYYY, h:mm:ss a'); 
    	// Display the set alarm time
    	$('.countDown').append('<p>The alarm is set for: '+alarmTime + '</p>');
    	// Clear the input field
    	$('#newAlarm').val('');

    	// Calculate the time from now
    	
    	var countingDown = function(){
    		$('.countDown').empty();
    		var timeDiff = moment(alarmDate).fromNow();
    		if (moment(timeDiff === "a few seconds ago" {
    		alert('It\'s '+ alarmDate);
    		console.log('equal');
    	}
    	else{
    		console.log('not equal');
    		
    	}
    	// Display time from now
    	$('.countDown').append('<p>Time left : '+timeDiff + '</p>');
    	};
    	
  		// Set interval for updating time difference
   		setInterval(countingDown, 1000);



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