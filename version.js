// 生成版本JOSN文件
const fs = require('fs')
const path = require('path')

function initVersion() {
  let data = JSON.stringify({
    version: 'v_' +  Date.now()
  })
  fs.writeFile(path.join(__dirname, '/public/version.json'), data, err => {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
    }
  })
}
initVersion()
