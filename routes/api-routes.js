const artists = require('../models/');

module.exports = function (app) {

  app.get('/api/artists', function (req, res) {
    artists.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.post('/api/artists', function (req, res) {
    artists.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

}