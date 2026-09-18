/**
 * 热榜类型
 * - 1: 24小时热销榜
 * - 2: 周热销榜
 */
export const HotType = {
  /** 24小时热销榜 */
  DAY: 1,
  /** 周热销榜 */
  WEEK: 2,
} as const

export type HotTypeType = (typeof HotType)[keyof typeof HotType] // 等价于 1 | 2
