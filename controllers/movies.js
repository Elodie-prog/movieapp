const Movie = require("../models/movie");

exports.displayAllMovies = (req, res, next) => {
    Movie.find({}, (err, docs) => {
        if (!docs) {
            res.send(404).json({
                success: false,
                msg: "Whoops! Looks like we could not find your movie!"
            })
        }

        res.status(200).json({
            success: true,
            msg: `Display all movies for '${req.params.find}'`,
            movies: docs
        })
    })
};

exports.displayMoviesByCategories = (req, res, next) => {
    Movie.findByCategory({category: req.params.category}, (err, docs) => {
        if (!docs) {
            res.send(404).json({
                success: false,
                msg: "Whoops! Looks like there are no movies for this category"
            })
        }
        res.status(200).json({
            success: true,
            msg: `Display all movies by categories for '${req.params.category}'`,
            movies: docs
        })
    })
};

exports.getMovieByTitle = (req, res, next) => {
    Movie.findByTitle({title: req.params.title}, (err, docs) => {
        if (!docs) {
            res.send(404).json({
                success: false,
                msg: "Whoops! There no movies with this title",
                movies: docs

            })
        }
        res.status(200).json({
            success: true,
            msg: `Display movies by title for '${req.params.title}'`,
            movies: docs
        })
    });
};

exports.getMovieById = (req, res, next) => {
    Movies.findById({id: req.params.id}, (err, docs) => {
        if (!docs) {
            res.send(404).json({
                success: false,
                msg: "Whoops! There no movies with this Id",
                movies: docs
            })
        }
        res.status(200).json({
            success: true,
            msg: `Display movies by id for '${req.params.id}'`,
            movies: docs
        })
    })
};