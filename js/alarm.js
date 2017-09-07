

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
