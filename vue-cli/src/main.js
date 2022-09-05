import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// var App = {
//   template: '<div>app</div>'
// }
// 이 역할과 밑 부분의 render는 같음

new Vue({
  render: h => h(App),
}).$mount('#app')
// 이것과 동일
// new Vue({
//   el: '#app'
// })
