'use strict'

var http = require('http');

var server = http.createServer(function(request, response){
  console.log(request.method + 'request for "' + request.url + '"');
  response.end("Hello world!");
});

module.exports = server;
