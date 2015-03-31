var router = require('express').Router();

router.get('/login', function (req, res) {
  res.send('You should log in!');
});

router.get('/setLogin/:login', function (req, res) {
  var login = req.params.login;

  if (login && login !== '') {
    req.session.login = login;

    console.log(req.session);

    res.send('Your login is set to: ' + login);
  } else {
    res.send('Bad login!');
  }
});

module.exports = router;
