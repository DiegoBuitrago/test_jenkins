const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
const port = 3000

let list = [{name:'Diego', age:84}, {name:'Santiago', age:103}, {name:'Guerrero', age:65}]
/* otro comentario local
dSASD
sD
ADS
*/
app.get('/', function (req, res) {
    res.send("hola mundo");
});

app.get('/list', (req, res) => {
    if(list !== undefined){
        res.sendStatus(200);
    }else{
        res.sendStatus(500);
    }
})

app.post('/name', (req, res) => {
    if(list.filter(person => person.name == req.body.name) !== undefined){
        res.sendStatus(200);
    }else{
        res.sendStatus(500);
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;