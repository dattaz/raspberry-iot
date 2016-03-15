var sensorLib = require('node-dht-sensor');
var http = require('http');

var sensor = {
    initialize: function () {
        return sensorLib.initialize(11, 26);
    }
};
sensor.initialize()


var server = http.createServer(function(req, res) {
  var readout = sensorLib.read();
  res.writeHead(200,  {"Content-Type": "text/html"});
  res.end('Temperature: ' + readout.temperature.toFixed(2) + 'C, ' + 'humidity: ' + readout.humidity.toFixed(2) + '%');
  //res.end('COUCOU :)');
});

server.listen(8080);
