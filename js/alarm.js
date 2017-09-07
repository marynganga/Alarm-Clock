

var datetime = null,
        date = null,
        day = null,
        time = null;

function Time(){

};

Time.prototype.update = function () {
	 $('.currentTime').empty();
   date = moment(new Date())
  // console.log(date)
    var day = date.format('dddd, MMMM Do YYYY');
    var time = date.format('h:mm:ss a');

    $('.currentTime').append('<p>Today is: '+ day + ' the time is ' + time+'</p>');


   // datetime.html(date.format('dddd, MMMM Do YYYY') +'time'+ date.format('h:mm:ss a'));
   // datetime.html(day + ' the time is ' + time);
};

//A function to clear the input field after successful submission of a number.
function clearForm(form) {
    $('input').val('');
};

exports.timeModule = Time;
exports.formClearanceModule = clearForm;
