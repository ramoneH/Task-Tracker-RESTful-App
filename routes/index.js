var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Task Tracker ' });
});
/* GET USER PAGE */
router.get('/users', function(req, res) {
  res.render('users', { title: 'USERS PAGE ' });
});
/* GET Admin PAGE */
router.get('/admin', function(req, res) {
  res.render('admin', { title: 'Admin PAGE ' });
});
router.get('/login', function(req, res) {
  res.render('login', { title: 'login PAGE ' });
});
router.get('/register', function(req, res) {
  res.render('register', { title: 'Admin PAGE ' });
});

module.exports = router;
