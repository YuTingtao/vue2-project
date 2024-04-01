const fs = require('fs')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// 生成版本JSON文件
try {
  fs.writeFileSync(resolve('public/version.json'), JSON.stringify({
    version: 'v_' +  Date.now()
  }))
  console.log('JSON文件写入成功')
} catch (err) {
  console.log('JSON文件写入失败:', err)
}

module.exports = {
  publicPath: './',
  outputDir: 'docs', // 打包生产的目录
  transpileDependencies: ['vuex-persist'], // 需要转语法的依赖
  productionSourceMap: false,
  chainWebpack(config) {
    config.resolve.alias.set('@', resolve('src'))
    // 图片压缩
    config.module.rule('images').test(/\.(gif|png|jpe?g)$/i)
      .use('image-webpack-loader').loader('image-webpack-loader').options({
        mozjpeg: {
          progressive: true,
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4
        },
        gifsicle: {
          interlaced: false,
        },
        webp: {
          quality: 75
        }
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
        additionalData: `@import "~@/assets/style/vars.scss";`
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
