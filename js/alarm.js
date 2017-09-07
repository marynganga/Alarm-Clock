

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
