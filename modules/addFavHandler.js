'use strict';

const favDrink = require('../collection/fav');

function addFavHandler (req,res){
    const{strDrink,strDrinkThumb }= req.body;

    favDrink.find({strDrink:strDrink}, (err,data)=>{
        if (err){
            res.result(500).send('there is an error');
        }else{
            if (data.length == 0){
                const newFav = new favDrink({
                    strDrink,
                    strDrinkThumb,
                })
                newFav.save();
            }else{
                console.log('yaay')
            }
        }
    })
}

module.exports = addFavHandler;