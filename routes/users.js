const express = require('express');
const userController = require('../controllers/users')
const router = express.Router();

router.get('/favorites', userController.getMyFavoritesMovies);
router.post('/favorites', userController.addMovies);
router.delete('/favorites/:id', userController.deleteMovies);

module.exports = router;