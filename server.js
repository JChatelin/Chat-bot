const express = require("express")
const app = express()

app.get('/hello:name?', function(req, res) {
    if (req.query.name) {
        res.send("Hello " + req.query.name + "!\n")
    } else {
        res.send("What is your name?\n");
    }
})

app.listen(process.env.PORT || 3000, function() {
    console.log('Example app listening on port 3000!')
})