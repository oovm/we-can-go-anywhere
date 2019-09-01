import {createApp} from 'vue'
import App from './App.vue'
import './styles/main.scss'
import i18n from "./locales"

// 创建Vue应用实例
const app = createApp(App)
app.use(i18n)
app.mount('#app')