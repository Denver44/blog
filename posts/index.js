import express from 'express';
import { randomBytes } from 'crypto';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const posts = {}; // Here all our post will be saved.

app.get('/post', (req, res) => {
  res.send(posts);
});

app.post('/post', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log('Listening on 4000');
});