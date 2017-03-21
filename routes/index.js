var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'yiin.life',
    words: req.__('words'),
    publish: req.__('publish'),
    about: req.__('about')
  });
});

module.exports = router;
