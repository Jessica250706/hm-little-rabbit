import type { GoodsDetailVO } from '@/types/goods'
import type { Good, HotGoodsParams } from '@/types/goods'
import request from '@/utils/http'

/**
 * @description: 获取-商品详情
 */
export const getGoodsDetailAPI = (id: string) => {
  return request.get<GoodsDetailVO>('/goods', {
    params: {
      id,
    },
  })
}

/**
 * 获取热榜商品
 */
export const getHotGoodsAPI = ({ id, type, limit = 3 }: HotGoodsParams) => {
  return request.get<Good[]>('/goods/hot', {
    params: {
      id,
      type,
      limit,
    },
  })
}

/**
 * 获取猜你喜欢商品
 */
export const getLikeListAPI = ({ limit = 4 }) => {
  return request.get<Good[]>('/goods/relevant', {
    params: {
      limit,
    },
  })
}
