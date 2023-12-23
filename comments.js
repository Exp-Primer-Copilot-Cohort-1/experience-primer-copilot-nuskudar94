// Create web server with Express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [
  { username: 'Todd', comment: 'lol that is so funny!' },
  { username: 'Sk8erBoi', comment: 'Plz delete your account, Todd' },
  { username: 'onlysayswoof', comment: 'woof woof woof' },
  { username: 'iliketurtles', comment: 'I like turtles!' },
  { username: 'sloths4eva', comment: 'Sloths are the best!' },
];
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// GET /comments
// return list of comments
app.get('/comments', (req, res) => {
  res.json(comments);
});
// POST /comments
// return successfully posted message
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json('post successfully added');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));