const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000
  },
  //lintOnSave: false //lint 에러 발생으로 주석처리
})
