var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sprite', {title: "Sprite Animation"});
});

module.exports = router;
