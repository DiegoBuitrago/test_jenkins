var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:3000");

describe('Run 2', function() {
    it('responds with json', function(done) {
        supertest('http://localhost:3000')
        .get('/')
        .set('Accept', 'application/text')
        .expect('Content-Type', /text/)
        .expect('hola mundo',done)
    });

    it('responds with json', function(done) {
        supertest('http://localhost:3000')
        .get('/list')
        .set('Accept', 'application/text')
        .expect('Content-Type', /text/)
        .expect(200,done)
    });

    it('responds with json', function(done) {
        supertest('http://localhost:3000')
        .post('/name')
        .send('name=Guerrero')
        .set('Accept', 'application/json')
        .expect('Content-Type', /text/)
        .expect(200,done)
    });
});