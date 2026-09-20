/**
 * 分页结果通用结构
 */
export interface PageResult<T> {
  /**
   * 总条数
   */
  counts: number
  /**
   * 每页条数
   */
  pageSize: number
  /**
   * 总页数
   */
  pages: number
  /**
   * 当前页码
   */
  page: number
  /**
   * 数据列表
   */
  items: T[]
}
