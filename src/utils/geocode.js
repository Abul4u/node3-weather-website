const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoidHJ1ZW1hYzIwMTgiLCJhIjoiY2t6enZjN3VrMDJhMTNpb2dsYXUyYmtmMSJ9.UzM6sN7FlGWiTMmrMKPQbA&limit=1';

  request({ url: url, json: true }, (err, { body }) => {
    if (err) {
      callback('Unable to connect to location services', undefined);
    } else if (body.features.length === 0) {
      callback('No data found', undefined);
    } else {
      const data = {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].place_name,
      };
      callback(undefined, data);
    }
  });
};

module.exports = geocode;
