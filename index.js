const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const topicRoutes = require('./routes/topicRoutes');
const flashcardRoutes = require('./routes/flashcardRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/topics', topicRoutes);
app.use('/topics', flashcardRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
