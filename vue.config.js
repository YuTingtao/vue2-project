const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'docs', // 打包生产的目录
  transpileDependencies: ['vuex-persist'], // 需要转语法的依赖
  productionSourceMap: false,
  chainWebpack(config) {
    config.resolve.alias.set('@', resolve('src'))
    // 图片压缩
    config.module.rule('images').use('image-webpack-loader').loader('image-webpack-loader').options({
      bypassOnDebug: true
    }).end()
    // svg图标
    config.module.rule('svg').exclude.add(resolve('src/assets/icon')).end()
    config.module.rule('icon').test(/\.svg$/).include.add(resolve('src/assets/icon')).end()
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({
        symbolId: 'icon-[name]'
      }).end()
    // 打包分析
    if (process.env.NODE_ENV === 'production') {
      config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/base/vars.scss";`
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8082,
    open: true,
    // 代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}
