import e from 'express';
import path from 'path';

const __dirname = path.resolve();

const app = e();

const port = process.env.PORT || 3000;

app.use(e.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});