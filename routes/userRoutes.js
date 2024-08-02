const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/profile', authController.authenticateToken, userController.getProfile);

module.exports = router;
