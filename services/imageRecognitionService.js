var vision = require('@google-cloud/vision')

const config = {
    projectId: 'localhackday-187810',
    keyFilename: './keystore.json'
  };

const client = new vision.ImageAnnotatorClient(config);

  async function getWebData(name) {

    console.log(name);

    const path = "./images/" + name + ".jpg";

    console.log(path);


    // Performs label detection on the image file
    client.webDetection(path)
    .then((results) => {
        console.log("wwww")
        const webEntities = results[0].webDetection.webEntities;
        console.log(results);
        console.log('Labels:');
        webEntities.forEach((webEntities) => console.log(webEntities.description));
    })
    .catch((err) => {
        console.error('ERROR:');
    });

    return "";
  }

  module.exports = {getWebData};


  
