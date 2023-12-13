import sysConfig from '@/config'
import tool from '@/utils/tool'
import el_en from 'element-plus/es/locale/lang/en'
import el_zh_cn from 'element-plus/es/locale/lang/zh-cn'
import { createI18n } from 'vue-i18n'

import en from './lang/en.js'
import zh_cn from './lang/zh-cn.js'

const messages = {
  'zh-cn': {
    el: el_zh_cn,
    ...zh_cn,
  },
  en: {
    el: el_en,
    ...en,
  },
}

const i18n = createI18n({
  locale: tool.data.get('APP_LANG') || sysConfig.LANG,
  fallbackLocale: 'zh-cn',
  globalInjection: true,
  messages,
})

export default i18n
