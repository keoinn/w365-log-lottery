// i18n配置
import { createI18n } from 'vue-i18n'
import en from './en'
import zhCn from './zhCn'
import zhTw from './zhTw'

export type Language = 'en' | 'zhCn' | 'zhTw'

export const languageList = [
  {
    key: 'zhTw',
    name: '繁體中文',
    flag: 'zh-Tw',
  },
  {
    key: 'zhCn',
    name: '中文',
    flag: 'zh-cn',
  },
  {
    key: 'en',
    name: 'English',
    flag: 'en-us',
  },
]
export const browserLanguage = navigator.language.toLowerCase().includes('zh') ? 'zhTw' : 'en'
const globalConfig = JSON.parse(localStorage.getItem('globalConfig') || '{}').globalConfig || {}
// 创建i18n
const i18n = createI18n({
  locale: globalConfig.language || browserLanguage,
  legacy: false,
  messages: {
    zhTw,
    zhCn,
    en,
  },
})

export default i18n
