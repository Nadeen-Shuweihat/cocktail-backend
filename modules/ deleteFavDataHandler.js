"use strict";

const favDrink = require("../collection/fav");

function deleteFavDataHandler(req, res) {
  let strDrink = req.params.strDrink;

  favDrink.deleteOne({ strDrink }, (err, data) => {
    favDrink.find({}, (err, data) => {
      if (err) {
        res.status(500).send("there is an error");
      }else {
          res.send(data)
      }
    });
  });
}

module.exports = deleteFavDataHandler;
