import type { Good } from './home'

/**
 * 响应结果
 */
export interface CategoryVO {
  /**
   * 下属分类数组
   */
  children: CategoryChild[]
  /**
   * 一级分类id
   */
  id: string
  /**
   * 一级分类名字
   */
  name: string
  /**
   * 一级分类图片
   */
  picture: null
  [property: string]: any
}

export interface CategoryChild {
  /**
   * 推荐品牌
   */
  brands: null
  /**
   * 分类集合
   */
  categories: null
  /**
   * 二级分类商品
   */
  goods: Good[]
  /**
   * 二级分类id
   */
  id: string
  /**
   * 二级分类名字
   */
  name: string
  /**
   * 二级分类父级分类id
   */
  parentId: null
  /**
   * 二级分类父级分类名字
   */
  parentName: null
  /**
   * 二级分类图片
   */
  picture: string
  /**
   * 销售属性
   */
  saleProperties: null
  [property: string]: any
}
