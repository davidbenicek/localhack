request = require('async-request');
var config = require('../config.json');

async function findPlace(place) {

    const url = "https://maps.googleapis.com/maps/api/geocode/json?key=" + config.googleMapToken + "&address=" + place;

    try {
        request = request.defaults({headers: {Accept: 'application/json'}});
        response = await request(url);
    
        var json = JSON.parse(response.body);

        var location = json.results[0].geometry.location;

        return location;
    } catch (err) {
        console.log("Error getting Maps: ", err);
    }
 
  }


module.exports = {findPlace};