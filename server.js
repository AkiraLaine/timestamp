var express = require("express");
var app = express();
require("sugar-date")

app.get('*', function(req, res){
    var path = req.url;
    var query = path.split("")
    query[0] = "";
    query = query.join("");
    var returnObj = {}
    if(Number(query)){
        returnObj.natural =  String(Date.create(Number(query) * 1000));
        returnObj.unix = Date.parse(returnObj.natural) / 1000;
    } else{
        returnObj.natural = String(Date.create(query));
        returnObj.unix =  Date.parse(returnObj.natural) / 1000; 
    }
    res.send(returnObj)
    res.end();
});

app.listen(process.env.PORT);