'use strict';

const favDrink = require('../collection');


function getFavDataHandler (req,res){
    favDrink.find({},(err,data)=>{
        if (err){
            res.status(500).send('there is an error')
        }else{
            res.send(data);
        }
    })
}

module.exports = getFavDataHandler ;