var router = require('express').Router();
var getRepos = require('./getRepos');
var isAuth = require('./isAuth');
var q = require('q');

router.get('/index', isAuth, function(req, res) {
  var data = {
    title: 'Hello World!',
    numbers: [123, 456, 789]
  };

  var firstRequest = getRepos('1');

  //ToDo
  var sendRequest = function () {
    req.query.name.forEach(function (option) {

      var x = getRepos(option);
      console.log(x);
    });
  }();

  q.all([
    firstRequest,
    sendRequest
  ]).then(function (responses) {
    return responses;
  }).done(function (responses) {
    data.responses = JSON.stringify(responses);

    res.render('index', data);
  });
});

module.exports = router;
