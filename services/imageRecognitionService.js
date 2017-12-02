var vision = require('@google-cloud/vision')

const config = {
    projectId: 'localhackday-187810',
    keyFilename: './keystore.json'
  };

const client = new vision.ImageAnnotatorClient(config);

  async function getWebData(name) {

    const path = "./images/" + name + ".jpg";

    var results = await client.webDetection(path)

        const place = results[0].webDetection.webEntities[0].description;
        const otherImages = results[0].webDetection.partialMatchingImages;
        console.log({name : place, otherImages : otherImages});

        return {name : place, otherImages : otherImages};

  }

  module.exports = {getWebData};


  
