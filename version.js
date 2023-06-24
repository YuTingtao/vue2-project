// 生成版本JOSN文件
const fs = require('fs')

function initVersion() {
  let data = JSON.stringify({
    version: 'v_' +  Date.now()
  })
  fs.writeFile('./docs/version.json', data, err => {
    if (err) {
      console.log('生成version文件失败:', err)
    } else {
      console.log('生成version文件:', data)
    }
  })
}
initVersion()
