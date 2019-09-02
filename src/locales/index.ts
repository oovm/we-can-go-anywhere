import {createFluentVue} from 'fluent-vue'
import {FluentBundle, FluentResource} from '@fluent/bundle'
import enFtl from './en-us.ftl?raw'
import zhFtl from './zh-hant.ftl?raw'
import {negotiateLanguages} from "@fluent/langneg";
import {ref} from 'vue'

// 英文资源
const enResource = new FluentResource(enFtl)
const enBundle = new FluentBundle('en-us')
enBundle.addResource(enResource)

// 中文资源
const zhResource = new FluentResource(zhFtl)
const zhBundle = new FluentBundle('zh-hans')
zhBundle.addResource(zhResource)

export const LOCATE_BUNDLES = [enBundle, zhBundle]

// 当前语言
export const currentLocale = ref(getNegotiatedLanguages())

/**
 * 获取用户的首选语言
 * @param supportedLocales 支持的语言列表
 * @param defaultLocale 默认语言
 * @returns 协商后的语言列表
 */
export function getNegotiatedLanguages(defaultLocale = 'zh-hant') {
    const userLocales = navigator.languages || [navigator.language]
    const availableLocales = LOCATE_BUNDLES.map(bundle => bundle.locales[0])
    const negotiated = negotiateLanguages(
        userLocales,
        availableLocales,
        {defaultLocale}
    )
    return negotiated[0]
}

// 切换语言
export function toggleLanguage() {
    currentLocale.value = currentLocale.value === 'en-us' ? 'zh-hans' : 'en-us'
}

// 导出 fluent-vue 实例创建函数
const fluentVue = createFluentVue({
    bundles: LOCATE_BUNDLES,
    current: currentLocale
})
export default fluentVue