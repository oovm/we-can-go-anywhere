import {createFluentVue} from 'fluent-vue'
import {FluentBundle, FluentResource} from '@fluent/bundle'
import enFtl from './en-us.ftl?raw'
import zhFtl from './zh-hans.ftl?raw'
import zhHantFtl from './zh-hant.ftl?raw'
import {negotiateLanguages} from "@fluent/langneg";
import {ref} from 'vue'

// 英文资源
const enBundle = new FluentBundle('en-us')
enBundle.addResource(new FluentResource(enFtl))

// 简体中文资源
const zhBundle = new FluentBundle('zh-hans')
zhBundle.addResource(new FluentResource(zhFtl))

// 繁体中文资源
const zhHantBundle = new FluentBundle('zh-hant')
zhHantBundle.addResource(new FluentResource(zhHantFtl))

export const LOCATE_BUNDLES = [enBundle, zhBundle, zhHantBundle]

// 当前语言
export const currentLocale = ref(getNegotiatedLanguages())

/**
 * 获取用户的首选语言
 * @param supportedLocales 支持的语言列表
 * @param defaultLocale 默认语言
 * @returns 协商后的语言列表
 */
export function getNegotiatedLanguages(defaultLocale = 'zh-hans') {
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
export function setLanguage(locale: string) {
    if (locale == 'en-us') {
        fluentVue.bundles = [enBundle]
    } else if (locale == 'zh-hans') {
        fluentVue.bundles = [zhBundle]
    } else if (locale == 'zh-hant') {
        fluentVue.bundles = [zhHantBundle]
    }
}

// 导出 fluent-vue 实例创建函数
const fluentVue = createFluentVue({
    bundles: LOCATE_BUNDLES,
})
export default fluentVue