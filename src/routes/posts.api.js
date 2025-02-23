import express from 'express';
import matter from 'gray-matter';

const router = express.Router();

router.get('/', (req, res) => {
  fetch(`https://api.github.com/repos/likeamusa/blog/contents/posts`)
    .then((response) => response.json())
    .then((data) => {
      const posts = data.map((post) => ({
        title: post.name.replace('.md', ''),
        link: `/posts/${post.name.replace('.md', '')}`,
      }));
      res.json(posts);
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    })
});

router.get('/:postName', async (req, res) => {
  const { postName } = req.params;
  fetch(`https://raw.githubusercontent.com/likeamusa/blog/main/posts/${postName}.md`, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain',
    }
  })
    .then((response) => response.text())
    .then(text => {
      const { data, content } = matter(text);
      res.json({data, content});
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

export { router as postsRouter };