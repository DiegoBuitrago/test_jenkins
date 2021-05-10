var request = require('supertest');
var app = require('../index.js');

var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:3000");

describe('GET /', function () {
    it('responde con hola mundo', function (done) {
        request(app).get('/').expect("hola mundo", done)     
    });
});

// describe("Responde con hola mundo mío", function () {
//     it('responde con hola mundo Guerrero', function (hecho) {
//         request(app).get('/qw').expect("hola mundo Guerrero", hecho);
//         done();
//     });
// });

// describe("SAMPLE unit test", function () {
//     // #1 should return home page
//     it("should return home page", function (done) {
//         // calling home page
//         server
//             .get("/")
//             .expect("Content-type", /text/)
//             .expect(200) // THis is HTTP response
//             .end(function (err, res) {
//                 console.log(res)
//                 // HTTP status should be 200
//                 res.status.should.equal(200);
                
//                 done();
//             });
//     });
// });