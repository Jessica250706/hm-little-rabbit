import type { BannerVO, CategoryVO, GoodsVO, HotVO, NewVO } from '@/types/home'
import httpInstance from '@/utils/http'

/**
 * @description: 获取-全部分类(包含推荐商品)
 */
export const getCategoryAPI = () => {
  return httpInstance.get<CategoryVO[]>('/home/category/head')
}

/**
 * @description: 获取-轮播图数据
 */
export const getBannerAPI = (distributionSite?: string) => {
  return httpInstance.get<BannerVO[]>('/home/banner', {
    params: {
      distributionSite,
    },
  })
}

/**
 * @description: 获取-新鲜好物
 */
export const getNewAPI = (limit?: string) => {
  return httpInstance.get<NewVO[]>('/home/new', {
    params: {
      limit,
    },
  })
}

/**
 * @description: 获取-热门品牌
 */
export const getHotAPI = (limit?: string) => {
  return httpInstance.get<HotVO[]>('/home/hot', {
    params: {
      limit,
    },
  })
}

/**
 * @description: 获取-所有商品
 */
export const getGoodsAPI = () => {
  return httpInstance.get<GoodsVO[]>('/home/goods')
}
