const express = require('express');
const topicController = require('../controllers/topicController');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/', authController.authenticateToken, topicController.getTopics);
router.post('/', authController.authenticateToken, topicController.createTopic);

module.exports = router;
