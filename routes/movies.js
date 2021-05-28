const express = require('express');
const router = express.Router();

router.get('/display', (req,res) => {
    res.send('<h1>Display all movies</h1>');
})

router.get('/categories/:category', (req, res) => {
    res.status(200).json(
        success: true,
        msg: `Display all movies by category: ${req.params.id}`
    })
});

router.get('/search/:title', (req, res) => {
    res.status(200).json(
        success: true,
        msg: `Display movies by title: ${req.params.id}`
    })
});

router.get('/search/movie/:id', (req, res) => {
    res.status(200).json(
        success: true,
        msg: `Get movie by id: ${req.params.id}`
    })
});

router.get('/user/movie/:favorites', (req, res) => {
    res.status(200).json(
        success: true,
        msg: `Display all my favorites movies: ${req.params.id}`
    })
});

router.delete('/user/movie/delete/:favorite', (req, res) => {
    res.status(200).json(
        success: true,
        msg: `Delete a movie from my favorite: ${req.params.id}`
    })
});

router.post('/user/addMovie/:my favorite', (req, res) => {
    res.status(200).json(
        success: true,
        msg: `Add movie to my favorite: ${req.params.id}`
    })
});


module.exports = router;