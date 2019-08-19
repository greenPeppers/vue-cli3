const path = require('path')
// const ThemeColorReplacer = require('webpack-theme-color-replacer')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack(config) {
    // 打包文件可视化
    // analyze打包
    if (process.env.NODE_ENV === 'production') {
      if (process.env.VUE_APP_TEST === 'analyze') {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
      }
    }
    // 修改拓展名
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@r', resolve('src/router'))
      .set('@a', resolve('src/assets'))
    // 动态主题
    // config
    //   .plugin('webpack-theme-color-replacer')
    //   .use(new ThemeColorReplacer({
    //     fileName: 'css/theme-colors-[contenthash:8].css',
    //     matchColors: ['#ed4040', '#4b0'],
    //     resolveCss(resultCss) {
    //       return resultCss.replace(/#4b0/g, '#ed4040')
    //     },
    //     externalCssFiles: ['./src/assets/styles/global-variable.scss'],
    //     changeSelector(cssSelector) {
    //       return cssSelector
    //     },
    //     isJsUgly: process.env.NODE_ENV !== 'development',
    //   }))
  },
  lintOnSave: false, // 是否开启EsLint
  runtimeCompiler: true,
  publicPath: '/', // 设置打包文件相对路径
  devServer: {
    port: 2019,
    proxy: {
      '/dev': {
        target: 'http://192.168.110.41:8001', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/dev': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@a/styles/global-variable.scss";`
      },
      // 采用postcss-px2rem可以更改UI库里样式
      // postcss: {
      //   plugins: [
      //     require('postcss-px2rem')({
      //       remUnit: 192,
      //       remPrecision: 8
      //     }), // 换算的基数
      //   ]
      // }
    }
  }
}