var request = require('request');



async function findPlace(place) {
    console.log("yooo",place);

    const url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + place;

    await request(url, async function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        return body;
      });
 
  }


module.exports = {findPlace};