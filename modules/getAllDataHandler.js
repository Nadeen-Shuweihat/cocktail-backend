'use strict';

const axios = require('axios');

function getAllDataHandler(req,res){
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

    axios.get(url)
    .then((response)=>{
        res.send(response.data.drinks)
    })
    .catch((err)=>{
        res.status(500).send('there is an error')
    })
}

module.exports = getAllDataHandler;