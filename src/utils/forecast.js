const request = require('request');

const forecast = (lat, long, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=6ff9b6e596cb28ac32c6f588eed7084b&query=' +
    lat +
    ',' +
    long +
    '&units=f';

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback('Unable to connect to location services', undefined);
    } else if (body.error) {
      callback('no data found', undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          '. It is currently ' +
          body.current.temperature +
          ' degress out. It feels like ' +
          body.current.feelslike +
          ' degress out.'
      );
    }
  });
};

module.exports = forecast;
