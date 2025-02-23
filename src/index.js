import e from 'express';
import path from 'path';
import { postsRouter } from './routes/index.js';

const __dirname = path.resolve();

const app = e();

const port = process.env.PORT || 3000;

app.use(e.static('public'));

app.use('/api/posts', postsRouter);

app.get('/posts', (req, res) => {
  res.sendFile(__dirname + '/public/posts.html');
});

app.get('/posts/:postName', async (req, res) => {
  const postName = req.params.postName;
  try {
    res.sendFile(__dirname + '/public/post.html');
  } catch (error) {
    res.status(404).send('Post not found');
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// about
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/readme.html');
});

// contact
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});