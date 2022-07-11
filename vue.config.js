// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   // 配置跨域
//   devServer: {
//     port: 9999,
//     https: false,
//     proxy: {
//       [process.env.VUE_APP_BASE_API]: {
//         target: process.env.VUE_APP_BASE_URL,
//         changeOrigin: true,
//         pathRewrite: {
//           ['^' + process.env.VUE_APP_BASE_API]: ''
//         }
//       }
//     }
//   }
// })

module.exports ={
  publicPath:'./',
  devServe:{
    open: true,
    host:'localhost',
    prot:8080,
    https:false,
    proxy:{
      [process.env.VUE_APP_BASE_API]:{
        target:process.env.VUE_APP_CROSS_ORIGIN,
        changeOrigin:true,
        pathRewrite:{
          ['^' + process.env.VUE_APP_BASE_API]:''
        }
      }
    }
  }
}
