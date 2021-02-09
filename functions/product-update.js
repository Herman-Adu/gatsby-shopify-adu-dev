exports.handler = function (event, context, callback) {
    callback(nnull, {
        statusCode: 200,
        body: "Hello world",
    });
};