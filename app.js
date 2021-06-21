const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});

const app = express();
const PORT = process.env.PORT || 3000;

const movies = require('./routes/movies');
const users = require('./routes/users');

app.use('/user', users);
app.use('/movie', movies);

app.listen (PORT, () =>{
    console.log ( `Express started on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`);
})