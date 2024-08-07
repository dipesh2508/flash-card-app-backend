const prisma = require('../prismaClient');

exports.getFlashcards = async (req, res) => {
  const { topicId } = req.params;
  const flashcards = await prisma.flashCard.findMany({
    where: { topicId: parseInt(topicId) },
  });
  res.json(flashcards);
};

exports.createFlashcard = async (req, res) => {
  const { topicId } = req.params;
  const { question, answer } = req.body;
  const flashcard = await prisma.flashCard.create({
    data: {
      question,
      answer,
      topicId: parseInt(topicId),
    },
  });
  res.status(201).json(flashcard);
};
