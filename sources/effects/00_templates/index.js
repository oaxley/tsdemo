var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('##_project_##', {title: "XXXXXXXX"});
});

module.exports = router;
