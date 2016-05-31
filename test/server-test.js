'use strict'

var server = require('../lib/server');

var request = require('supertest');

describe('server', function(){
  it('should respond with "Hello World!" on /', function(done){
    request(server)
      .get('/')
      .expect(200, 'Hello world!', done);
  });
});
