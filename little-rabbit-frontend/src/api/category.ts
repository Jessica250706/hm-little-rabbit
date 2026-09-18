import type {
  CategoryDetailVO,
  CategoryGoodsParams,
  CategoryGoodsVO,
  CategoryVO,
} from '@/types/category'
import request from '@/utils/http'

/**
 * @description: 获取-二级分类列表
 */
export const getCategoryAPI = (id: string) => {
  return request.get<CategoryVO>('/category', {
    params: {
      id,
    },
  })
}

/**
 * @description: 获取二级分类列表数据
 */
export const getCategoryFilterAPI = (id: string) => {
  return request.get<CategoryDetailVO>('/category/sub/filter', {
    params: {
      id,
    },
  })
}

/**
 * @description: 获取分类商品列表
 */
export const getSubCategoryAPI = (params: CategoryGoodsParams) => {
  return request.post<CategoryGoodsVO>('/category/goods/temporary', params)
}
