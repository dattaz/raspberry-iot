
var sensor = require('ds18x20');
sensor.get('28-000005061b4f', function (err, temp) {
    console.log(temp);
});
