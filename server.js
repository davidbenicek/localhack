'use strict'
//Lib imports
var express = require('express');
var bodyParser = require('body-parser');

// Our imports

var imageRecognitionService = require("./services/imageRecognitionService.js");
var imageHandler = require("./services/imageHandler.js");
var googleMapsService = require("./services/googleMapsService.js");

//Start server
var app = express();
var port = Number(process.env.BACKEND_PORT || 1200);

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  	extended: true
}));

app.get('/test', function (req, res) {
    res.send({"text": "test"});
});

app.post('/image', function (req, res) {
    const name = req.body.name;
    const image = req.body.image;
    const result = handleImageUpload(name,image);
    console.log("tttt")
    
    result.then(function(x){
        console.log("zooo")
        res.send(x);
        
    }).catch(function(err){
        console.log(err);
    })
    
});

async function handleImageUpload(name,image){
    try {
        imageHandler.saveImage(name, image);
        console.log("eomgs")
        const result = await imageRecognitionService.getWebData(name);

        const map = await googleMapsService.findPlace(result.name);
        console.log(map);
        console.log("xxxxx",typeof result);
        return result;
    } catch (err) {
       console.log(err);
    }
}

app.listen(port);
console.log("Backend server running on http://localhost:1200/")

