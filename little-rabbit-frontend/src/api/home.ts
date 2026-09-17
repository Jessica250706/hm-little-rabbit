import type { BannerVO, HomeCategoryHeadVO, HomeGoodsVO, HotVO, NewVO } from '@/types/home'
import request from '@/utils/http'

/**
 * @description: 获取-全部分类(包含推荐商品)
 */
export const getCategoryAPI = () => {
  return request.get<HomeCategoryHeadVO[]>('/home/category/head')
}

/**
 * @description: 获取-轮播图数据
 */
export const getBannerAPI = (distributionSite?: string) => {
  return request.get<BannerVO[]>('/home/banner', {
    params: {
      distributionSite,
    },
  })
}

/**
 * @description: 获取-新鲜好物
 */
export const getNewAPI = (limit?: string) => {
  return request.get<NewVO[]>('/home/new', {
    params: {
      limit,
    },
  })
}

/**
 * @description: 获取-热门品牌
 */
export const getHotAPI = (limit?: string) => {
  return request.get<HotVO[]>('/home/hot', {
    params: {
      limit,
    },
  })
}

/**
 * @description: 获取-所有商品
 */
export const getGoodsAPI = () => {
  return request.get<HomeGoodsVO[]>('/home/goods')
}
