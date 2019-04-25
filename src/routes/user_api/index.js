const curd = require('mongodb-curd');
/**
 * 查询user数据库
 */
exports.getUser = (req, res) => {
    curd.find('lemon', 'user', (rs) => {
        if (!rs) {
            res.send({ code: 0 });
        } else {
            res.send({ code: 1, data: rs });
        }
    }, {
        limit: 1
    })
}