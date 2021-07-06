'use strict';

const mongoose = require('mongoose');

const favDrink = new mongoose.Schema({
    strDrink: String,
    strDrinkThumb: String,
});

const Fav = mongoose.model('FavDrink',favDrink);

module.exports = Fav;