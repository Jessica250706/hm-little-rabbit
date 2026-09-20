import type { CheckoutInfoResult, OrderDetail, SubmitOrderDTO, SubmitOrderVO } from '@/types/order'
import request from '@/utils/http'

/**
 * @description: 获取结算信息
 */
export const getCheckoutInfoAPI = () => {
  return request.get<CheckoutInfoResult>('/member/order/pre')
}

/**
 * @description: 获取-订单详情(以及支付结果)
 */
export const getOrderDetailAPI = (id: string) => {
  return request.get<OrderDetail>(`/member/order/${id}`)
}

/**
 * @description: 提交-订单
 */
export const createOrderAPI = (data: SubmitOrderDTO) => {
  return request.post<SubmitOrderVO>('/member/order', data)
}
