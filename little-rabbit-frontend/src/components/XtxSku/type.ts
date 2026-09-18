/**
 * 路径字典：key 为规格值拼接串，value 为 skuId 数组
 */
export type PathMap = Record<string, string[]>

/**
 * change 事件抛出的数据
 */
export interface SkuChangePayload {
  skuId?: string
  price?: string
  oldPrice?: string
  inventory?: number
  specsText?: string
}
