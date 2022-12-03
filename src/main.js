import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import QuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.snow.css'
import './assets/styles/element-variables.scss'
Vue.config.productionTip = false
Vue.use(QuillEditor)

Vue.use(Element)
new Vue({
  render: h => h(App),
}).$mount('#app')
