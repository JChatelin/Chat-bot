var http = require("http");

var server  = http.createServer(function(req, res){
    res.writeHead(200);
    res.end("Hello world!");
}).listen(3000, "127.0.0.1");
