var express = require('express');
var marked = require('marked');
var router = express.Router();

const Post = require('../models/post')

marked.setOptions({
  gfm: true,
  breaks: true,
  sanitize: true
})

/* GET users listing. */
router.post('/', function(req, res, next) {
  let post = new Post({
    ip: req.ip,
    user_agent: req.headers['user-agent'],
    referer: req.headers['referer'],
    post: req.body.post 
  })
  post.save((err, p) => {
    if (err) next(err)
    res.redirect(`/p/${p._id}`)
  })
});


router.get('/:id', function(req, res, next) {
  Post.findById(req.params.id, (err, p) => {
    if (err) next(err)
    res.render('post', {
      title: 'yiin.life',
      post: marked(p.post)
    })
  })
});

module.exports = router
