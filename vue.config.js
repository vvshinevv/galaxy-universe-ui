const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000
  },
  chainWebpack(config) {
    config.resolve.symlinks(false)
    config.resolve.alias.set( 'vue', path.resolve('./node_modules/vue'))
  },
  lintOnSave: false //lint 에러 발생으로 주석처리
})
