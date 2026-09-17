/**
 * 广告区域展示位置
 * - 1: 首页
 * - 2: 分类商品页
 */
export const DistributionSite = {
  HOME: '1',
  CATEGORY: '2',
} as const

export type DistributionSiteType = (typeof DistributionSite)[keyof typeof DistributionSite]
