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
    	$('.setAlarm').append('<p>The alarm is set for: '+alarmTime + '</p>');
    	// Clear the input field
    	$('#newAlarm').val('');

    	// Calculate the time to alarm ring
   		var countingDown = function(){
       var timeDiff = moment(alarmDate).fromNow();
       var timer = setInterval(function(){
        // Display time left to the set alarm
        $('.countDown').empty();
      $('.countDown').append('<p>Time left : '+timeDiff + '</p>');
        if (timeDiff === "a few seconds ago") {
       $('.countDown').empty();
       alert('It\'s '+ alarmTime);
  		
       console.log('equal');
       $('.countDown').empty();
        $('.countDown').append('<p>'+'Time\'s up!!'+'</p>');
         clearInterval(timer);
         var audio = new Audio('./assets/sounds/alarm.mp3');
		audio.play();
      }
      else{
       $('.countDown').empty();
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