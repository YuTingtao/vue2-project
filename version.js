// 生成版本JOSN文件
const fs = require('fs')

function initVersion() {
  try {
    const versionJson = {
      version: 'v_' +  Date.now()
    }
    fs.writeFileSync('./docs/version.json', JSON.stringify(versionJson))
  } catch (error) {
    process.exit(1)
  }
}

initVersion()
