const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://3.39.193.230:3000/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
        })
    );
};
