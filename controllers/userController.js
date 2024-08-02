const prisma = require('../prismaClient');

exports.getProfile = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.userId },
    include: { topics: true },
  });
  res.json(user);
};
