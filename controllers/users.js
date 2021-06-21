exports.displayAllMovies = (req, res, next) => {
    res.render('movies/movies.hbs')}

router.get('/:id', moviesController.getMyFavoritesMovies);
router.post('/:id', moviesController.addMovies);
router.delete('/:id', moviesController.deleteMovies);