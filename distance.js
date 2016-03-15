var usonic = require('r-pi-usonic');
var sensor = null;
/*
usonic.init(function (error) {
	if (error) {
	} else {
		sensor = usonic.createSensor(18, 17, 750);
		setTimeout(function() {
		                console.log('Distance: ' + sensor() + ' cm');
		}, 60);
		data = sensor();
		console.log(data);
	}

});
*/

usonic.init(function(err) {
  if (err) {
    throw new Error(err);
  }
  main(usonic.createSensor(18, 17, 1000));
});
var data = null
function main(sensor) {
	console.log(sensor());
	data=sensor();
}


console.log(data);
/*console.log(sensor());*/
