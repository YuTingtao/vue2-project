const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './', // 公共路径
  outputDir: 'dist', // 打包生产的目录
  transpileDependencies: ['vuex-persist'], // 需要转语法的依赖
  productionSourceMap: false,
  chainWebpack(config) {
    config.resolve.alias.set('@', resolve('src'));
    // svg图标
    config.module.rule('svg').exclude.add(resolve('src/assets/icon')).end();
    config.module
      .rule('icon')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
    // 打包分析
    // if (process.env.NODE_ENV === 'production') {
    //   config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    // }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/style/vars.scss";`
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    // 代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
};
