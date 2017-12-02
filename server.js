'use strict'
//Lib imports
var express = require('express');
var bodyParser = require('body-parser');

// Our imports

var imageRecognitionService = require("./services/imageRecognitionService.js");
var imageHandler = require("./services/imageHandler.js");

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

app.post('/image', function (req, res) {
    const name = req.body.name;
    const image = req.body.image;
    try {
        console.log("image");
        imageHandler.saveImage(name, image);
        var result = imageRecognitionService.getWebData(name);

    } catch (err) {
       console.log("zoooo");
    }
    res.send("");
});

app.listen(port);
console.log("Backend server running on http://localhost:1200/")

