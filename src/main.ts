import {createApp} from 'vue'
import {createFluentVue} from 'fluent-vue'
import {FluentBundle, FluentResource} from '@fluent/bundle'
import {negotiateLanguages} from '@fluent/langneg'
import App from './App.vue'
import './styles/main.scss'

// 获取用户的首选语言
const userLocales = navigator.languages || [navigator.language]
const supportedLocales = ['en', 'zh']
const negotiatedLocales = negotiateLanguages(
    userLocales,
    supportedLocales,
    {defaultLocale: 'en'}
)

// 加载语言资源
const bundles = new Map()

// 英文资源
const enResource = new FluentResource(`
image-minecraft = Minecraft Art Style
image-jojo = JoJo's Bizarre Adventure Style
image-attack-on-titan = Attack on Titan Style
image-吉利普 = Ghibli Style
`)
const enBundle = new FluentBundle('en')
enBundle.addResource(enResource)
bundles.set('en', enBundle)

// 中文资源
const zhResource = new FluentResource(`
image-minecraft = 我的世界风格
image-jojo = JOJO的奇妙冒险风格
image-attack-on-titan = 进击的巨人风格
image-吉利普 = 吉卜力风格
`)
const zhBundle = new FluentBundle('zh')
zhBundle.addResource(zhResource)
bundles.set('zh', zhBundle)

// 创建fluent-vue插件实例
const fluent = createFluentVue({
    bundles,
    locale: negotiatedLocales[0]
})

// 创建Vue应用实例
const app = createApp(App)
app.use(fluent)
app.mount('#app')