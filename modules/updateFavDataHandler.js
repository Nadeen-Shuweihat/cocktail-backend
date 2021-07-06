// 'use strict';

// const favDrink = require('../collection/fav');

// function updateFavDataHandler(req,res){
//     const{strDrink,strDrinkThumb }= req.body;

//     favDrink.updateOne(
//         {strDrink:target},
//         {$set:{strDrink:strDrink,strDrinkThumb:strDrinkThumb }},
//         (err,data)=>{
//             favDrink.find({},(err,data)=>{
//                 if (err){
//                     res.status(500).send('there is an error')
//                 }else{
//                     res.send(data);
//                 }
//             })
//         }
//     )

// }

// module.exports = updateFavDataHandler;