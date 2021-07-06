'use strict';

const mongoose = require('mongoose');

const favDrink = new mongoose.Schema({
    strDrink:string,
    strDrinkThumb:string,
});

const Fav = mongoose.model('FavDrink',favDrink);

module.exports = Fav;