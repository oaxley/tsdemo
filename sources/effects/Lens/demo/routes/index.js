var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('lens', {title: "Lens demo by Oaxley"});
});

module.exports = router;
