module.exports = function (Container) {
    var app = require('../../server/server');
    Container.afterRemote('upload', function (context, user, next) {
        console.log('UPLOAD');
        // app.models.User
        next();
    });
};
