import type { Good, HomeGoodsChild } from './home'
import type { SortFieldType } from '@/constants/category'

/**
 * 响应结果
 */
export interface CategoryVO {
  /**
   * 下属分类数组
   */
  children: CategoryDetailVO[]
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

export interface CategoryDetailVO {
  /**
   * 推荐品牌
   */
  brands: []
  /**
   * 分类集合
   */
  categories: HomeGoodsChild[]
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
  saleProperties: []
  [property: string]: any
}

/**
 * 分类商品列表查询参数
 */
export interface CategoryGoodsParams {
  /**
   * 分类 id
   */
  categoryId: string
  /**
   * 页码，从 1 开始
   */
  page: number
  /**
   * 每页条数
   */
  pageSize: number
  /**
   * 排序字段
   */
  sortField?: SortFieldType
  [property: string]: any
}

/**
 * 分页商品列表结果
 */
export interface CategoryGoodsVO {
  /**
   * 总条数
   */
  counts: number
  /**
   * 当前页码
   */
  page: number
  /**
   * 每页条数
   */
  pageSize: number
  /**
   * 总页数
   */
  pages: number
  /**
   * 商品列表
   */
  items: Good[]
}
