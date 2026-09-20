import type { OrderStateValue, PayChannelValue, PayTypeValue } from '@/constants/order'
import type { PageResult } from './page'

/**
 * 响应结果
 */
export interface OrderDetail {
  /**
   * 预计到货时间
   */
  arrivalEstimatedTime: null
  /**
   * 订单收货人-城市编码
   */
  cityCode: string
  /**
   * 订单交易关闭时间
   */
  closeTime: string
  /**
   * 订单发货时间
   */
  consignTime: null
  /**
   * 订单倒计时，剩余的秒数-1表示已经超时, 正数表示倒计时未结束
   */
  countdown: number
  /**
   * 订单收货人-地区编码
   */
  countyCode: string
  /**
   * 订单创建时间
   */
  createTime: string
  /**
   * 订单配送类型，配送时间类型，1为不限，2为工作日，3为双休或假日
   */
  deliveryTimeType: number
  /**
   * 订单交易完成时间
   */
  endTime: null
  /**
   * 订单完成评价时间
   */
  evaluationTime: null
  /**
   * 订单id
   */
  id: string
  /**
   * 订单状态，1为待付款, 2为待发货, 3为待收货, 4为待评价, 5为已完成, 6为已取消
   */
  orderState: number
  /**
   * 订单支付渠道，1支付宝, 2微信
   */
  payChannel: number
  /**
   * 订单付款截止时间，剩余的秒数, 前台转换成分钟: 秒数
   */
  payLatestTime: string
  /**
   * 订单实付金额
   */
  payMoney: number
  /**
   * 订单状态，1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消
   */
  payState: number
  /**
   * 订单支付时间
   */
  payTime: null
  /**
   * 订单支付方式，1为在线支付, 2为货到付款
   */
  payType: number
  /**
   * 订单邮费
   */
  postFee: number
  /**
   * 订单收货人-省份编码
   */
  provinceCode: string
  /**
   * 订单收货人-详细地址
   */
  receiverAddress: string
  /**
   * 订单收货人
   */
  receiverContact: string
  /**
   * 订单收货人手机号
   */
  receiverMobile: string
  /**
   * 订单商品sku的id集合
   */
  skus: OrderSkus[]
  /**
   * 订单金额合计
   */
  totalMoney: number
  /**
   * 订单数量合计
   */
  totalNum: number
  [property: string]: any
}

export interface OrderSkus {
  /**
   * 商品属性文字，属性文字，例如“颜色:瓷白色 尺寸：8寸”
   */
  attrsText: string
  /**
   * 商品当前单价
   */
  curPrice: number
  /**
   * 商品id
   */
  id: string
  /**
   * 商品图片地址
   */
  image: string
  /**
   * 商品名字
   */
  name: string
  /**
   * 商品属性集合
   */
  properties: Property[]
  /**
   * 商品数量
   */
  quantity: number
  /**
   * 商品实付金额
   */
  realPay: number
  /**
   * 商品spu的id
   */
  spuId: string
  /**
   * 商品金额合计
   */
  totalMoney: null
  [property: string]: any
}

export interface Property {
  /**
   * 属性名称，如 颜色
   */
  propertyMainName: string
  /**
   * 属性值名称，如 黑色
   */
  propertyValueName: string
  [property: string]: any
}

/**
 * 响应结果
 */
export interface CheckoutInfoResult {
  /**
   * 订单商品集合
   */
  goods: CheckoutGood[]
  /**
   * 订单总计信息
   */
  summary: Summary
  /**
   * 订单内用户地址列表
   */
  userAddresses: UserAddress[]
  [property: string]: any
}

export interface CheckoutGood {
  /**
   * 商品属性
   */
  attrsText: string
  /**
   * 商品数量，购买数量
   */
  count: number
  /**
   * 商品id
   */
  id: string
  /**
   * 商品名字
   */
  name: string
  /**
   * 商品实付单价
   */
  payPrice: string
  /**
   * 商品图片
   */
  picture: string
  /**
   * 商品价格
   */
  price: string
  /**
   * 商品sku的id
   */
  skuId: string
  /**
   * 商品实付价格小计
   */
  totalPayPrice: string
  /**
   * 商品小计总价
   */
  totalPrice: string
  [property: string]: any
}

/**
 * 订单总计信息
 */
export interface Summary {
  /**
   * 订单总折扣
   */
  discountPrice: number
  /**
   * 订单总件数
   */
  goodsCount: number
  /**
   * 订单总邮费
   */
  postFee: number
  /**
   * 订单总价格实付
   */
  totalPayPrice: number
  /**
   * 订单总价格
   */
  totalPrice: number
  [property: string]: any
}

export interface UserAddress {
  /**
   * 收货详细地址
   */
  address: string
  /**
   * 收货地址标签，用英文逗号分割
   */
  addressTags: null | string
  /**
   * 收货地址-城市编码
   */
  cityCode: string
  /**
   * 收货人-联系方式
   */
  contact: string
  /**
   * 收货地址-地区编码
   */
  countyCode: string
  /**
   * 收货完整地址
   */
  fullLocation: string
  /**
   * 收货地址id
   */
  id: string
  /**
   * 是否为默认，0是, 1不是
   */
  isDefault: number
  /**
   * 收货方-邮政编码
   */
  postalCode: null | string
  /**
   * 收货地址-省份编码
   */
  provinceCode: string
  /**
   * 收货人-名字
   */
  receiver: string
  [property: string]: any
}

export interface SubmitOrderDTO {
  /**
   * 收货地址id
   */
  addressId: string
  /**
   * 买家备注留言，默认为空字符串即可
   */
  buyerMessage: string
  /**
   * 配送时间，默认为1即可
   */
  deliveryTimeType: number
  /**
   * 订单内商品集合，需要自己携带给后台
   */
  goods: Good[]
  /**
   * 支付渠道，默认为1即可(支付宝支付-此项目只支持支付宝)
   */
  payChannel: PayChannelValue
  /**
   * 支付方式，默认为1即可(在线支付)
   */
  payType: PayTypeValue
  [property: string]: any
}

export interface Good {
  /**
   * 商品数量
   */
  count: number
  /**
   * 商品库存量单位id
   */
  skuId: string
  [property: string]: any
}

/**
 * 响应结果
 */
export interface SubmitOrderVO {
  /**
   * 订单倒计时，剩余的秒数 -1 表示已经超时，正数表示倒计时未结束
   */
  countdown: number | null
  /**
   * 订单创建时间
   */
  createTime: string
  /**
   * 订单id
   */
  id: string
  /**
   * 订单状态，1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消
   */
  orderState: OrderStateValue
  /**
   * 订单支付渠道，1支付宝、2微信
   */
  payChannel: PayChannelValue
  /**
   * 订单付款截止时间，剩余的秒数，前台转换成分钟：秒数
   */
  payLatestTime: string
  /**
   * 订单实付金额
   */
  payMoney: number
  /**
   * 订单支付方式，1为在线支付，2为货到付款
   */
  payType: PayTypeValue
  /**
   * 订单邮费
   */
  postFee: number
  /**
   * 订单商品sku的id集合
   */
  skus: string[] | null
  /**
   * 订单金额合计
   */
  totalMoney: number
  /**
   * 订单数量合计
   */
  totalNum: number
  [property: string]: any
}

/**
 * 获取订单列表的请求参数
 */
export interface GetUserOrderParams {
  /**
   * 订单状态
   * 0 表示全部，其余对应 OrderState 的值
   */
  orderState: OrderStateValue
  /**
   * 页码，从 1 开始
   */
  page: number
  /**
   *
   * 每页数量
   */
  pageSize: number
}

/**
 * 获取我的订单的订单结构
 */
export interface MyOrderVO {
  /**
   * 订单倒计时，剩余的秒数 -1 表示已经超时，正数表示倒计时未结束
   */
  countdown: number | null
  /**
   * 订单创建时间
   */
  createTime: string
  /**
   * 订单id
   */
  id: string
  /**
   * 订单状态，1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消
   */
  orderState: OrderStateValue
  /**
   * 订单支付渠道，1支付宝、2微信
   */
  payChannel: PayChannelValue
  /**
   * 订单付款截止时间，剩余的秒数，前台转换成分钟：秒数
   */
  payLatestTime: string
  /**
   * 订单实付金额
   */
  payMoney: number
  /**
   * 订单支付方式，1为在线支付，2为货到付款
   */
  payType: PayTypeValue
  /**
   * 订单邮费
   */
  postFee: number
  /**
   * 订单商品sku的id集合
   */
  skus: OrderSkus[]
  /**
   * 订单金额合计
   */
  totalMoney: number
  /**
   * 订单数量合计
   */
  totalNum: number
  [property: string]: any
}

/**
 * 订单列表返回结果
 */
export type UserOrderResult = PageResult<MyOrderVO>
