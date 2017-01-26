
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    app.enable('trust proxy');
    var ip= req.ip;
    res.send(ip);
});

app.listen(PORT, function(){
    console.log('Listening on port: ' + PORT)
});