
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send(getInfo(req));
});

app.listen(PORT, function(){
    console.log('Listening on port: ' + PORT)
});

function getInfo(req){
    app.enable('trust proxy');
    var ip= req.ip;
    var lang = req.get('accept-language');
    var soft = req.get('user-agent')
    return(ip+"     "+soft+"     "+lang)
    
}