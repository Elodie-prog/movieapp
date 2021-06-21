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