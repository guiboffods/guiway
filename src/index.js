const express = require('express')
const app = express()
var bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Hello World')
})


function funcaoteste(req, res) {
    if (req.body.teste == "meu cu") {

        res.send("req.body")

    }
    res.send("delicia")
}

app.post("/teste", funcaoteste)
app.listen(3000) 