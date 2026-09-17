import type { CategoryVO } from '@/types/category'
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
