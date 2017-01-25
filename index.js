var os = require('os')
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    var info = os.cpus();
    res.send(info[0].model);
});

app.listen(PORT, function(){
    console.log('Listening on port: ' + PORT)
});