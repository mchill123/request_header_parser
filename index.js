var locale = require('locale')
var os = require('os')
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    var ip = os.networkInterfaces();
    var soft = os.platform();
    var lang = req.acceptsLanguage;
    res.send(ip + soft + lang);
});

app.listen(PORT, function(){
    console.log('Listening on port: ' + PORT)
});