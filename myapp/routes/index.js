var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');

console.log(__dirname + '/public');
app.use('/index', express.static(__dirname + '/public'))

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// /* GET home page. */
// router.get('/angular', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// /* GET home page. */
// router.get('/runtime.js', function(req, res, next) {
//   res.sendFile(path.join(__dirname, '../public/nggame')+'/runtime.js');

// });
// /* GET home page. */
// router.get('/polyfills.js', function(req, res, next) {
//   res.sendFile(path.join(__dirname, '../public/nggame')+'/polyfills.js');

// });
// /* GET home page. */
// router.get('/polyfills.js.map', function(req, res, next) {
//   res.sendFile(path.join(__dirname, '../public/nggame')+'/polyfills.js.map');

// });
// /* GET home page. */
// router.get('/styles.js', function(req, res, next) {
//   res.sendFile(path.join(__dirname, '../public/nggame')+'/styles.js');

// });
// /* GET home page. */
// router.get('/styles.js.map', function(req, res, next) {
//   res.sendFile(path.join(__dirname, '../public/nggame')+'/styles.js.map');

// });
// /* GET home page. */
// router.get('/vendor.js', function(req, res, next) {
//   res.sendFile(path.join(__dirname, '../public/nggame')+'/vendor.js');

// });
// /* GET home page. */
// router.get('/vendor.js.map', function(req, res, next) {
//   res.sendFile(path.join(__dirname, '../public/nggame')+'/vendor.js.map');

// });
// /* GET home page. */
// router.get('/main.js.map', function(req, res, next) {
//   res.sendFile(path.join(__dirname, '../public/nggame')+'/main.js.map');

// });
// /* GET home page. */
// router.get('/main.js', function(req, res, next) {
//   res.sendFile(path.join(__dirname, '../public/nggame')+'/main.js');

// });
// /* GET home page. */
// router.get('/runtime.js', function(req, res, next) {
//   res.sendFile(path.join(__dirname, '../public/nggame')+'/runtime.js');

// });
// /* GET home page. */
// router.get('/runtime.js.map', function(req, res, next) {
//   res.sendFile(path.join(__dirname, '../public/nggame')+'/runtime.js.map');

// });

module.exports = router;
