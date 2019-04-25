var express = require('express');
var router = express.Router();
let { removeBill, addBill, findBill } = require('./index_api');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// 删除账单接口
router.get('/removeBill', removeBill);

// 添加账单接口
router.post('/addBill', addBill);

// 查找账单接口
router.post('/findBill', findBill);

module.exports = router;