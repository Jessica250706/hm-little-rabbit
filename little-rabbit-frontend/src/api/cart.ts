import type { AddCartDTO, BatchDeleteCartVo, CartDetail } from '@/types/cart'
import request from '@/utils/http'

/**
 * @description: 加入-购物车
 */
export const addCartAPI = (data: AddCartDTO) => {
  return request.post<CartDetail>('/member/cart', data)
}

/**
 * @description: 获取-购物车列表
 */
export const getCartListAPI = () => {
  return request.get<CartDetail[]>('/member/cart')
}

/**
 * @description: 删除-购物车商品
 */
export const delCartAPI = (ids: Array<string>) => {
  return request.delete('/member/cart', { data: { ids } as BatchDeleteCartVo })
}
