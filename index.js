const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('hola mundo')
    // res.send("hola mundo")
})

app.get('/qw', function (req, res) {
    res.send("hola mundo Guerrero");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;