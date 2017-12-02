var path = require('path');
var fs = require('fs');

async function saveImage(name, base64) {

    var splitted = base64.split(',')[1];

    fs.writeFileSync("./images/" + name + ".jpg", splitted, 'base64', function(err) {
        if(err) {
            console.log("Could not save");
        }

    });

}



module.exports = {saveImage};