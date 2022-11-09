// 自动化导入
const contexts = require.context('./', false, /\.js$/)
const modules = {}

contexts.keys().forEach(key => {
  if (key == './index.js') return
  modules[key.replace(/(\.\/|\.js)/gi, '')] = contexts(key).default
})

// 使用时 import { xx } from '@/utils
module.exports = {
  ...modules
}
