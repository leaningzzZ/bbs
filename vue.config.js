module.exports = {
    publicPath: './',
    devServer: {
        open: true,                                 //配置自动启动浏览器
        proxy: {                                        // 配置跨域
            '/api': {
                target: 'http://175.24.22.69:8080/',
                pathRewrite: { '^/api': '' },
                changeOrigin: true,     // target是域名的话，需要这个参数，
                secure: false,          // 设置支持https协议的代理
            },
            '/bpi': {
                target: 'http://175.24.22.69:8080/html/studentManagement/',
                pathRewrite: { '^/bpi': '' },
                changeOrigin: true,     // target是域名的话，需要这个参数，
                secure: false,          // 设置支持https协议的代理
            },
        },                                           // 配置跨域处理,只有一个代理
    },
}