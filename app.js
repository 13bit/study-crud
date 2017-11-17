const express = require('express');
const app = express();

const posts = [
  {
    id: 1,
    title: "Post 1",
    shortDescription: "Post 1 short description",
    fullDescription: "Post 1 full description"
  },
  {
    id: 2,
    title: "Post 2",
    shortDescription: "Post 2 short description",
    fullDescription: "Post 2 full description"
  },
  {
    id: 3,
    title: "Post 3",
    shortDescription: "Post 3 short description",
    fullDescription: "Post 3 full description"
  },
  {
    id: 4,
    title: "Post 4",
    shortDescription: "Post 4 short description",
    fullDescription: "Post 4 full description"
  },
  {
    id: 5,
    title: "Post 5",
    shortDescription: "Post 5 short description",
    fullDescription: "Post 5 full description"
  }
];
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res, next) => {
  res.render('post-list', {title: 'Hey', posts: posts})
})

app.get('/post/:postId', (req, res, next) => {
  const postId = req.params.postId;
  const post = posts.find((post) => post.id == postId);

  if (!post) {
    return res.status(404).send();
  }

  res.render('post-show', {title: 'Hey', post: post})
});

app.get('/about', (req, res, next) => {
  res.render('about', {title: 'Hey'})
})

app.listen(3000, () => {
  console.log('Application started on port 3000');
});

