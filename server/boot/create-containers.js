var fs = require('fs');

module.exports = function (app, next) {
    try {
        var files = fs.readdirSync(__dirname + '/../../uploads');
        if (files.length === 0) {
            fs.mkdirSync(__dirname + '/../../uploads/images');
        }
        next();
    } catch (e) {
        next(e);
    }
};
