module.exports = {
  "publicPath": "./",

  "configureWebpack": {
    "target": "electron-renderer"
  },

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/css/_variables.scss";`
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'zh_CN',
      fallbackLocale: 'zh_CN',
      localeDir: 'i18n',
      enableInSFC: true
    }
  }
}
