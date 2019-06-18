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
  }
}
