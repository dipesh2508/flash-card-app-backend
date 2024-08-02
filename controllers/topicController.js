const prisma = require('../prismaClient');

exports.getTopics = async (req, res) => {
  const topics = await prisma.topic.findMany({
    where: { userId: req.user.userId },
    include: { flashcards: true },
  });
  res.json(topics);
};

exports.createTopic = async (req, res) => {
  const { title } = req.body;
  const topic = await prisma.topic.create({
    data: {
      title,
      userId: req.user.userId,
    },
  });
  res.status(201).json(topic);
};
