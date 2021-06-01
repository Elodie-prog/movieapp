exports.displayAllMovies = (req, res, next) => {
    res.send(200).json({
        success: true,
        msg: `Display all movies: ${req.params.id}`
    })
};


exports.displayMoviesByCategories = (req, res, next) => {
    res.send(200).json({
        success: true,
        msg: `Display all movies by categories: ${req.params.id}`
    })
};

exports.getMovieByTitle = (req, res, next) => {
    res.send(200).json({
        success: true,
        msg: `Display movies by title: ${req.params.id}`
    })
};

exports.getMovieById = (req, res, next) => {
    res.send(200).json({
        success: true,
        msg: `Get movie by id: ${req.params.id}`
    })
};

exports.getMyFavoritesMovies = (req, res, next) => {
    res.send(200).json({
        success: true,
        msg: `Display all my favorites movies: ${req.params.id}`
    })
};

exports.deleteMovies = (req, res, next) => {
    res.send(200).json({
        success: true,
        msg: `Delete a movie from my favorite: ${req.params.id}`
    })
};

exports.addMovies = (req, res, next) => {
    res.send(200).json({
        success: true,
        msg: `Add movie to my favorite: ${req.params.id}`
    })
};