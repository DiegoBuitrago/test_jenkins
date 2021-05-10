var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:3000");

describe('Run 2', function() {
    it('responds with json', function(done) {
        server
        .get('/')
        .set('Accept', 'application/text')
        .expect('Content-Type', /text/)
        .expect('hola mundo', done)
    });
});