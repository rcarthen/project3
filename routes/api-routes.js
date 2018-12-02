const artists = require('../models/artists');
const users= require ('../models/users');
module.exports = function (app) {

  //get route to retrieve all artists
  app.get('/api/artists', function (req, res) {
    artists.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  ///get route to retieve individual artist
  app.get('/api/artists/:id', function(req,res){
    artists.findOne({_id:req.params.id}).then(function(data){
      res.json(data)
    }) .catch(function(error){
    res.json(error);
    });
  });
    
  //post route to post a new artist

  app.post('/api/artists', function (req, res) {
    artists.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

//put route to update an artists information
app.put('/api/artists/:id', function (req, res) {
  artists.findOneAndUpdate({_id: req.params.id}, req.body, {returnOriginal: false})
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});
  
//delete route to delete a single artist
  app.delete("/api/artists/:id", function (req,res){
    artists.findOneAndDelete({_id:req.params.id}).then(function(data){
      res.json(data)
    }) .catch(function(error){
    res.json(error);
    });
  });
    
//route to post to users table 

app.post('/api/users', function (req, res) {
  console.log(req.body)
  users.create(req.body)
    .then(function (data) {
      res.json({"result":"success"});
    })
    .catch(function (err) {
      res.json(err);
    });
});


}