'use strict'

var express = require('express'),
    app = express();

app.use(express.static('public'));

app.get('/',function(request, response){
  response.end("Hi this is app.js");
});
module.exports = app;
