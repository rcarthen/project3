const express = require('express');
const mongoose = require('mongoose');
const db = require("./models")

const PORT = process.env.PORT || 3001
;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect('mongodb://localhost/artists', { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost/data', { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true });
require('./routes/api-routes')(app);


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
  
  db.artists.create({
    artist_name: 'Yebba Smith',
    image:'/images/yebba.jpg', 
    genre: 'Soul',
    city_country: 'New York City, NY',
    ig_handle: '@yebbasmith',
    website:'https://www.yebbasmith.com/'
   
   }).then(function(response){

   });

db.artists.create({
  artist_name: 'Mereba',
  image:'/images/mereba.jpg', 
  genre: 'Soul',
  city_country: 'Atlanta, GA',
  ig_handle: '@mereba',
  website:'http://www.merebamusic.com/'
}).then(function(response){

});


db.artists.create({
  artist_name: 'Lianne La Havas',
    image:'/images/lahavas.jpg', 
    genre: 'Soul',
    city_country: 'London, UK',
    ig_handle: '@liannellahavas',
    website:'http://www.liannelahavas.com/'
  }).then(function(response){

  });
  

db.artists.create({
  artist_name: 'Madison Ryann Ward',
image:'/images/madison.jpg', 
genre: 'Soul',
city_country: ' Oklahoma City, Oklahoma',
ig_handle: '@madisonryannward',
website:'http://www.madisonryann.com/'
}).then(function(response){

});

db.artists.create({
  artist_name: 'Aaradhna',
image:'images/aarah.jpg', 
genre: 'Soul',
city_country: 'Wellington, New Zealand',
ig_handle: '@aaradhna',
website:'http://www.aaradhna.com/'
}).then(function(response){

});


db.artists.create({
  artist_name: 'Jess Glynne',
image:"https://m.media-amazon.com/images/M/MV5BNjIxOWIzM2ItYzAxMy00MjU5LTlmMDAtYzc1MDkwMjQzYWI4XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_SY1000_SX910_AL_.jpg", 
genre: 'Soul',
city_country: 'London, UK',
ig_handle: "@jessglynne",
website:'https://jessglynne.co.uk/'
}).then(function(response){

});

});