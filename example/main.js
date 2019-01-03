// 入口文件
import Vue from 'vue';
import vueCmp from '../src/index';
// 导入 App 根组件
import app from './index.vue';

Vue.use(vueCmp);
// eslint-disable-next-line no-unused-vars
const vm = new Vue({
  el: '#app',
  render: c => c(app),
});
