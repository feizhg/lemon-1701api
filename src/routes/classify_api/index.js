/**
 * [分类模块 ：用来书写分类的所有业务逻辑]
 
 */
const curd = require('mongodb-curd');
const dbName = 'lemon';
module.exports = {
    // 查询自定义custom业务逻辑
    getCustom(req, res) {
        curd.find(dbName, 'custom', (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1, data: rs });
            }
        })
    },
    // 查询分类业务逻辑
    getClassify(req, res) {
        // 前台发送参数 {type,userId}
        let { type, userId } = req.body;
        if (!type || !userId) {
            return res.send({ code: 2, msg: '参数不完整' });
        }
        curd.find(dbName, 'classify', { 'type': type, 'userId': { $in: ['*', userId] } }, (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1, data: rs });
            }
        })
    },
    //  添加自定义分类
    addClassify(req, res) {
        // 前台发送参数 {type,userId,icon,name}
        let { type, userId, icon, name } = req.body;
        if (!type || !userId || !icon || !name) {
            return res.send({ code: 2, msg: '参数不完整' });
        }
        curd.insert(dbName, 'classify', req.body, (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1 });
            }
        })
    }

}