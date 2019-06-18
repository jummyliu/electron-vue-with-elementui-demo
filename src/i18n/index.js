import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

// 加载目录下所有的多语言
const requireFile = require.context(
  // 其组件目录的相对路径
  './',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\/\S+\/index\.js$/
)

const i18n = {}

requireFile.keys().forEach(fileName => {
  // 获取配置
  const config = requireFile(fileName)
  // 获取多语言目录名字
  const name = fileName.replace(/^\.\/(.*)\/.*\.\w+$/, '$1')
  // 导出除 index 之外的变量
  if (name.toLowerCase() !== 'index') {
    i18n[name] = config.default || config
  }
})

// export default i18n

Vue.use(VueI18n)

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: {
    en_US: {
      ...enLocale,
      ...i18n['en_US']
    },
    zh_CN: {
      ...zhLocale,
      ...i18n['zh_CN']
    }
  }
})
