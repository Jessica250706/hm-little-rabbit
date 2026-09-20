// 把 components 中的所有组件通过插件的方式进行全局化注册
import type { App } from 'vue'
import GoodItem from './GoodItem/Index.vue'
import ImageView from './ImageView/Index.vue'
import Sku from './XtxSku/Index.vue'

export const componentPlugin = {
  install(app: App) {
    // app.component('组件名称', 组件爱你配置对象)
    app.component('XtxImageView', ImageView)
    app.component('XtxSku', Sku)
    app.component('GoodItem', GoodItem)
  },
}
