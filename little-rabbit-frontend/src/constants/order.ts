/**
 * 订单状态
 * 1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消
 */
export const OrderState = {
  /** 待付款 */
  UNPAID: 1,
  /** 待发货 */
  UNSHIPPED: 2,
  /** 待收货 */
  SHIPPED: 3,
  /** 待评价 */
  UNCOMMENTED: 4,
  /** 已完成 */
  COMPLETED: 5,
  /** 已取消 */
  CANCELLED: 6,
} as const

export type OrderStateValue = (typeof OrderState)[keyof typeof OrderState]

/** 订单状态 → 中文文案 */
export const OrderStateMap: Record<OrderStateValue, string> = {
  [OrderState.UNPAID]: '待付款',
  [OrderState.UNSHIPPED]: '待发货',
  [OrderState.SHIPPED]: '待收货',
  [OrderState.UNCOMMENTED]: '待评价',
  [OrderState.COMPLETED]: '已完成',
  [OrderState.CANCELLED]: '已取消',
}

/**
 * 支付渠道
 * 1支付宝、2微信
 */
export const PayChannel = {
  /** 支付宝 */
  ALIPAY: 1,
  /** 微信 */
  WECHAT: 2,
} as const

export type PayChannelValue = (typeof PayChannel)[keyof typeof PayChannel]

export const PayChannelMap: Record<PayChannelValue, string> = {
  [PayChannel.ALIPAY]: '支付宝',
  [PayChannel.WECHAT]: '微信',
}

/**
 * 支付方式
 * 1为在线支付，2为货到付款
 */
export const PayType = {
  /** 在线支付 */
  ONLINE: 1,
  /** 货到付款 */
  CASH_ON_DELIVERY: 2,
} as const

export type PayTypeValue = (typeof PayType)[keyof typeof PayType]

export const PayTypeMap: Record<PayTypeValue, string> = {
  [PayType.ONLINE]: '在线支付',
  [PayType.CASH_ON_DELIVERY]: '货到付款',
}
