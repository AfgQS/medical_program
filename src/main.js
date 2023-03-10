/*
 * @Author: QS 2725432838@qq.com
 * @Date: 2022-05-08 09:23:18
 * @LastEditors: QS 2725432838@qq.com
 * @LastEditTime: 2023-02-19 16:10:23
 * @FilePath: \medical_program\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

console.log($)
$(function () {
  $('.trigger1').click(function () {
    $('#duty .wrap').removeClass('item1').addClass('item2')
  })

  $('.trigger2').click(function () {
    $('#duty .wrap').removeClass('item2').addClass('item1')
  })
})
