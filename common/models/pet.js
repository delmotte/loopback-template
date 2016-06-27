module.exports = function (Pet) {
    Pet.beforeRemote('create', function (context, user, next) {
        context.args.data.customUserId = context.req.accessToken.userId;
        next();
    });
};
