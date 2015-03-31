var router = require('express').Router();
var request = require('request');
var config = require('./config');
var isAuth = require('./isAuth');
var getRepos = require('./getRepos');

router.get('/repos', isAuth, function (req, res) {
  var options = {
    url: config.reposUrl,
    headers: {
      'User-Agent': 'request'
    }
  };

  request.get(options, function (err, response, data) {
    res.send(JSON.parse(data));
  });
});

router.get('/getRepos/:username', function (req, res) {
  getRepos(req.param.username);
});

module.exports = router;
