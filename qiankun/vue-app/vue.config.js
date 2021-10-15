const packageName = require('./package.json').name;
const port = 8090;
module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? `//localhost:${port}` : '/',
  devServer: {
    port,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    }
  },
};