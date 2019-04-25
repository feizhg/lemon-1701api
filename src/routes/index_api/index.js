/**
 * [账单模块 ：用来书写账单的所有业务逻辑]
 
 */
const curd = require('mongodb-curd');
const dbName = 'lemon';
module.exports = {
    // 删除账业务逻辑
    removeBill(req, res) {
        let { _id } = req.query;
        if (!_id) {
            return res.send({ code: 2, msg: "参数不完整" });
        }
        curd.remove(dbName, 'bill', req.query, (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1 });
            }
        })
    },
    //添加账业务逻辑
    addBill(req, res) {
        let { icon, Time, name, money, type, userId } = req.body;
        if (!icon || !Time || !name || !money || !type || !userId) {
            return res.send({ code: 2, msg: "参数不完整" });
        }
        curd.insert(dbName, 'bill', req.body, (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1 });
            }
        })
    },
    //查询账业务逻辑
    findBill(req, res) {
        let { Time, type, name } = req.body;

        if (!Time) {
            return res.send({ code: 2, msg: "参数不完整" });
        }

        // 设置查询条件
        let query = { Time: new RegExp(Time) };
        if (type) {
            query.type = type;
        }
        if (name) {
            query.name = { $in: name.split(',') };
        }
        curd.find(dbName, 'bill', query, (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1, data: rs });
            }
        })
    }

}