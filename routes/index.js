var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data',  function(req, res, next){
  var responses = ['Awesome', 'Great', 'Bad', 'So-so'];
  res.json(responses[parseInt(Math.random()*responses.length)]);
})

module.exports = router;
