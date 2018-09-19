// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入element-ui
import ElementUI from 'element-ui'
import './assets/css/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import  './assets/icons/iconfont.css'
// 引入(ajax调用)
import Api from './api/index.js';

// 公共使用组件
//考虑到PC页面的浏览器兼容性,采取传统的AJAX封装使用
Vue.use(Api);
Vue.use(ElementUI)
Vue.config.productionTip = false


/* 全局Ajax使用方法如下:
   页面中需要使用到的地方直接调取如下代码即可
*/
// this.$http({
//   url:"https://api.api68.com/klsf/getLotteryInfo.do?issue=&lotCode=10009",
//   type:"get",
//  data:{
//    key:value
//  }
// })
// .then(function(res){
//   console.log("$http",res);
//   console.log(this.msg);
// }.bind(this))
// .catch(function(err){
//   console.log(err)
// }.bind(this))


//全局弹出框调用方法
// 引入了方便的element Ui插件 可以全局调用带遮罩层的弹出框
/* <template>
  插入按钮
  <el-button type="text" @click="open5">点击打开 Message Box</el-button>
</template> */

// 在script中插入方法即可

/* <script>
  export default {
    methods: {
      open5() {
        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
          dangerouslyUseHTMLString: true
        });
      }
    }
  }
</script> */

// element UI弹出框参考定制网站URL:http://element-cn.eleme.io/#/zh-CN/component/message-box#messagebox-dan-kuang



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})