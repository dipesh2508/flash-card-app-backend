const express = require('express');
const flashcardController = require('../controllers/flashcardController');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/:topicId/flashcards', authController.authenticateToken, flashcardController.getFlashcards);
router.post('/:topicId/flashcards', authController.authenticateToken, flashcardController.createFlashcard);

module.exports = router;
