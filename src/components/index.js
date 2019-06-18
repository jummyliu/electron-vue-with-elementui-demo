// 加载目录下所有的基础组件
const requireComponent = require.context(
  // 其组件目录的相对路径
  './',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /App\S+\.(vue|js)$/
)

const install = function (Vue, opts = {}) {
  if (install.installed) return

  requireComponent.keys().forEach(fileName => {
    // 获取配置
    const componentConfig = requireComponent(fileName)
    // 获取名字（剥去文件名的开头 `./` 和结尾的扩展名）
    const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    // 注册组件
    Vue.component(
      componentName,
      componentConfig.default || componentConfig
    )
  })
}

export default {
  install
}
