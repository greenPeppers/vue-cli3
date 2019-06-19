module.exports = {
  chainWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
      if (process.env.VUE_APP_TEST === 'analyze') {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
      }
    }
  }
}