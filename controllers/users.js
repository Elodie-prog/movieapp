const User = require('../models/user');

exports.getMyFavoritesMovies = (req, res, next) => {
       
}


exports.deleteMovies = (req, res, next) => {
        userFavourites.delete((movie)=> {
                movie.id ==req.params.id;
        })
}

exports.addMovies = (req, res, next)=> {
        userFavourites.push(req.body.movieName);
}