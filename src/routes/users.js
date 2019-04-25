var express = require('express');
var router = express.Router();
let { getUser } = require('./user_api');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/getUser', getUser);

module.exports = router;