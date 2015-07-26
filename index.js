'use strict';

var express = require('express');
var app = express();

var fs = require('fs');

app.get('/', function (req, res) {
  fs.readFile('/clockwork/read.dat', function (err, dat) {
    var color = (dat.toString() == 0 ? '#0c0' : '#f00');
    var state = (date.toString() == 0 ? 'open!' : 'closed...');

    var response = '<div style="color:#fff; padding:20px; background:' + color + '; width:200px; height:200px;">Restroom is ' + state + '</div>';

    res.send(response);
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening on http://%s:%s', host, port);
});
