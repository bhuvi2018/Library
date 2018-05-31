var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Responding..');
});

router.get('/cool', function(req, res, next) {
  res.send('You\'re so cool');
});

router.get('/bhuvi', function(req, res, next) {
  res.send('Bhuvana Kathiresan');
});


module.exports = router;


//SET DEBUG=express-locallibrary-tutorial:* & npm start
