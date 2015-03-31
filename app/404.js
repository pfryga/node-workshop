var router = require('express').Router();

router.get('*', function (req, res) {
  res.set('content-type', 'application/json');
  res.status(404);
  res.json({status: 'Url not found'});
});

module.exports = router;
