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