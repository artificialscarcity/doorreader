'use strict';

var express = require('express');
var app = express();

var fs = require('fs');

app.get('/', function (req, res) {
  fs.readFile('/clockwork/read.dat', function (err, dat) {
    res.send({
      state: ((dat === 0) ? 'open' : 'closed')
    });
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening on http://%s:%s', host, port);
});
