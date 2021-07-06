'use strict';

require('dotenv').config();
const cors = require('cors');
const express = require('express');

const server= express();
server.use(cors());
server.use(express.json());


const PORT =process.env.PORT;

const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true });

const getAllDataHandler= require('./modules/getAllDataHandler');
const addFavHandler = require('./modules/addFavHandler');
const getFavDataHandler = require('./modules/getFavDataHandler');
const deleteFavDataHandler = require('./modules/deleteFavDataHandler');
// const updateFavDataHandler = require('./modules/updateFavDataHandler');

// server.put('/updateFavData', updateFavDataHandler);


server.delete('/deleteFavData', deleteFavDataHandler);


server.get('/getFavData', getFavDataHandler);

server.post('/addFav', addFavHandler);

server.get('/allData', getAllDataHandler);

server.get('/',(req,res)=>{
    res.send('Home')
});

server.get('*',(req,res)=>{
    res.status(404).send('page not found')
});

server.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`)
});