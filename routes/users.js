const express = require('express');
const userController = require('../controllers/users')
const router = express.Router();

router.get('/movies', userController.displayAllMovies);
    

module.exports = router;