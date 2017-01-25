
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    var ip= req.ips;
    res.send(ip);
});

app.listen(PORT, function(){
    console.log('Listening on port: ' + PORT)
});