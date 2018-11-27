const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for artist table 
var ArtistsSchema = new Schema({
    artist_name: {
        type: String,
        trim: true,
        required: 'Required'
    },
    image: {
        type: String,
        trim: true,
        required: 'Required'
    },

    genre: {
        type: String,
        trim: true,
        required: 'Required'
    },


    city_country: {
        type: String,
        trim: true,
        required: 'Required'
    },

    ig_handle: {
        type: String,
        trim: true,
        required: 'Required'
    },

    website: {
        type: String,
        trim: true,
        required: 'Required'
    },

    fans:{
    type: String,
    trim: true,
    required:'Required'
    }

});

const artists = mongoose.model('artists', ArtistsSchema);

module.exports = artists;