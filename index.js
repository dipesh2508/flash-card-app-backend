const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const topicRoutes = require('./src/routes/topicRoutes');
const flashcardRoutes = require('./src/routes/flashcardRoutes');

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/topics', topicRoutes);
app.use('/topics', flashcardRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
