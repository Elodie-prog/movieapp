const express = require('express');
const moviesController = require('../controllers/movies');
const router = express.Router();

//TODO change to the API endpoints
router.get('/', moviesController.displayAllMovies);
router.get('/categories/:category', moviesController.displayMoviesByCategories);
router.get('/search', moviesController.getMovieByTitle);
router.get('/:id', moviesController.getMovieById);


module.exports = router;