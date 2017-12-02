var path = require('path');
var fs = require('fs');

async function saveImage(name, base64) {

    fs.writeFileSync("./images/" + name + ".jpg", base64, 'base64', function(err) {
        if(err) {
            console.log("Could not save");
        }

    });

}



module.exports = {saveImage};