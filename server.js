const express = require('express');
const mongoose = require('mongoose');
const db = require("./models")

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect('mongodb://localhost/artists', {
  useNewUrlParser: true
});
// mongoose.connect('mongodb://localhost/data', { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true });
require('./routes/api-routes')(app);


app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);

  // db.artists.create({
  //   artist_name: 'Yebba Smith',
  //   image: '/images/yebbasmith.jpg',
  //   genre: 'Soul',
  //   city_country: 'New York City, NY',
  //   ig_handle: '@yebbasmith',
  //   website: 'https://www.yebbasmith.com/',
  //   hashtag: 'yebbasmith'

  // }).then(function (response) {

  // });

  // db.artists.create({
  //   artist_name: 'Mereba',
  //   image: '/images/mereba.jpg',
  //   genre: 'Soul',
  //   city_country: 'Atlanta, US',
  //   ig_handle: '@mereba',
  //   website: 'http://www.merebamusic.com/',
  //   hashtag: 'mereba'
  // }).then(function (response) {

  // });

  // db.artists.create({
  //   artist_name: 'Lianne La Havas',
  //   image: '/images/lahavas.jpg',
  //   genre: 'Soul',
  //   city_country: 'London, GB',
  //   ig_handle: '@liannellahavas',
  //   website: 'http://www.liannelahavas.com/',
  //   hashtag: 'liannelahavas'
  // }).then(function (response) {

  // });


  // db.artists.create({
  //   artist_name: 'Zhavia',
  //   image: '/images/zhavia.jpg',
  //   genre: 'Soul',
  //   city_country: ' Los Angeles, US',
  //   ig_handle: '@zhaviaward',
  //   website: 'https://www.zhaviamusic.com/',
  //   hashtag: 'zhaviaward'
  // }).then(function (response) {

  // });

  // db.artists.create({
  //   artist_name: 'Aaradhna',
  //   image: '/images/aarah.jpg',
  //   genre: 'Soul',
  //   city_country: 'Wellington, New Zealand',
  //   ig_handle: '@aaradhna',
  //   website: 'http://www.aaradhna.com/',
  //   hashtag: 'aaradhna'
  // }).then(function (response) {

  // });

  // db.artists.create({
  //   artist_name: 'Jess Glynne',
  //   image: '/images/jessglynne.jpg',
  //   genre: 'Soul',
  //   city_country: 'London, GB',
  //   ig_handle: "@jessglynne",
  //   website: 'https://jessglynne.co.uk/',
  //   hashtag: 'jessglynne'
  // }).then(function (response) {

  // });

  // db.artists.create({
  //   artist_name: 'Yuna',
  //   image: '/images/yuna.jpg',
  //   genre: 'Soul',
  //   city_country: 'Kuala Lumpur, Malaysia',
  //   ig_handle: "@yuna",
  //   website: 'http://yunamusic.com/',
  //   hashtag: 'yuna'
  // }).then(function (response) {

  // });

  // db.artists.create({
  //   artist_name: 'Laura Mvula',
  //   image: '/images/laura.jpg',
  //   genre: 'Soul',
  //   city_country: 'London, GB',
  //   ig_handle: "@lauramvula",
  //   website: 'http://studiostorehouse.com/client/laura-mvula/',
  //   hashtag: 'lauramvula'
  // }).then(function (response) {

  // });

  // db.artists.create({
  //   artist_name: 'Shekhinah',
  //   image: '/images/shek.jpg',
  //   genre: 'Soul',
  //   city_country: 'Durban, South Africa',
  //   ig_handle: "@shekhinahd",
  //   website: 'http://www.shekhinahd.com/about/',
  //   hashtag: 'shekhinah'
  // }).then(function (response) {

  // });

});