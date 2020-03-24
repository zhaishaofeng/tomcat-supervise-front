const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const vueConfig = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
  },
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        modifyVars: {
            'primary-color': '#1DA57A',
            'link-color': '#1DA57A',
            'border-radius-base': '2px',
        },
        javascriptEnabled: true
      }
    }
  }
}

module.exports = vueConfig