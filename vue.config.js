module.exports = {
    devServer: {
        port: "9877",
        publicPath: '/',
        proxy: {
            '/api': {
                target: "https://demos.meilisearch.com",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
