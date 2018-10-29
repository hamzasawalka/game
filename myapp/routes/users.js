var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET users listing. */
router.get('/get/:userId', function(req, res, next) {
  res.send('this is user'+req.params.userId);
});


module.exports = router;
