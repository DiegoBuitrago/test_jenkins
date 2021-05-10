var request = require('supertest');
var app = require('../index.js');

describe('GET /', function () {
    it('responde con hola mundo', function (hecho) {
        // navega a la raíz y verifica que la respuesta sea "hola mundo" 
        request(app).get('/').expect("hola mundo", hecho);
        --exit
    });
});