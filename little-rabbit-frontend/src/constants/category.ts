/**
 * 商品排序字段
 * - publishTime: 最新
 * - orderNum: 销量
 * - evaluateNum: 评价
 */
export const SortField = {
  PUBLISH_TIME: 'publishTime',
  ORDER_NUM: 'orderNum',
  EVALUATE_NUM: 'evaluateNum',
} as const

export type SortFieldType = (typeof SortField)[keyof typeof SortField] // 等价于 'publishTime' | 'orderNum' | 'evaluateNum'
