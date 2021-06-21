const express = require('express');
const moviesController = require('../controllers/movies');
const router = express.Router();

router.get('/:id', moviesController.displayAllMovies);
router.get('/:id', moviesController.displayMoviesByCategories);
router.get('/:id', moviesController.getMovieByTitle);
router.get('/:id', moviesController.getMovieById);


module.exports = router;