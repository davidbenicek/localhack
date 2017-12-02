request = require('async-request');

async function findPlace(place) {

    const url = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBuivT2gNbZcJ2y8RQrACawtD-sFaWhR1w&address=" + place;

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