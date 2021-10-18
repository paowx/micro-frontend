# vue app 
# 子应用

### 重写vue.config.js文件

### 在入口文件main.js中导出相应的生命周期钩子bootstrap、mount、unmount
https://qiankun.umijs.org/zh/guide/getting-started

### 修改路由文件router/index.js  路由模式改成history模式

### 注意
1、子应用跟主应用的挂载跟元素id不能相同，即主应用的index.html <div id="app"></div> 子应用改成<div id="vue-app"></div>


