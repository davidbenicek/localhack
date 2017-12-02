'use strict'
//Imports
var express = require('express');
var bodyParser = require('body-parser');

//Start server
var app = express();
var port = Number(process.env.BACKEND_PORT || 1200);

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  	extended: true
}));

app.get('/test', function (req, res) {
    res.send({"text": "test"});
});

app.listen(port);
console.log("Backend server running on http://localhost:1200/")