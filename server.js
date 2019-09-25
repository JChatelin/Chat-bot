const express = require("express")
const app = express()
app.use(express.json())

app.get('/hello', function(req, res) {
    if (req.query.name) {
        res.send("Hello " + req.query.name + "!\n")
    } else {
        res.send("What is your name?\n");
    }
})

app.post('/chat', function(req, res) {
    if (req.body.msg == "ville") {
        res.send("We are in Paris!\n")
    } else if(req.body.msg == "météo") {
        res.send("It's sunny!\n")
    }
})

app.listen(process.env.PORT || 3000, function() {
    console.log('Example app listening on port 3000!')
})