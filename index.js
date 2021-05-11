const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

let list = [{name:'Diego', age:84}, {name:'Santiago', age:103}, {name:'Guerrero', age:65}]

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

app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), () =>
    console.log(`Server on port ${app.get('port')}`)
);
