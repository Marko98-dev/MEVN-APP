'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  return res.send('Hello Wordl!');
});

app.listen(3000, function () {
  return console.log('Listening on port 3000');
});