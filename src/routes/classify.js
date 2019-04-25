var express = require('express');
var router = express.Router();
let { getCustom, getClassify, addClassify } = require('./classify_api');

// 查找自定义分类图标
router.get('/getCustom', getCustom);

// 查找分类图标
router.post('/getClassify', getClassify);

// 添加自定义分类图标
router.post('/addClassify', addClassify);

module.exports = router;