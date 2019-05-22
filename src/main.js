// 导入顶级vue
import Vue from 'vue';
// 导入app.vue
import App from './App.vue';
Vue.config.productionTip = false;
// 导入ruoter.js
import router from './router.js';
// 全局样式
import './assets/less/base.less'
// 导入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 富文本
import  VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})