var sensorLib = require('node-dht-sensor');
var http = require('http');
var usonic = require('r-pi-usonic');

/* temp + hum */
var sensor = {
    initialize: function () {
        return sensorLib.initialize(11, 26);
    }
};
sensor.initialize()

/*temp only */
var sensor_temp_w1 = require('ds18x20');

var server = http.createServer(function(req, res) {
  var readout = sensorLib.read(); /*temp + hum */
  var temp_temp = sensor_temp_w1.get('28-000005061b4f'); /* temp only */
  res.writeHead(200,  {"Content-Type": "text/html"});
  res.end(' Capteur 1 :Temperature: ' + readout.temperature.toFixed(2) + 'C, ' + 'humidity: ' + readout.humidity.toFixed(2) + '% <br> Capture 2 : temperature :' + temp_temp);
  //res.end('COUCOU :)');
});

server.listen(8080);
