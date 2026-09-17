// 封装banner轮播图相关的业务代码
import { onMounted, ref } from 'vue'
import { getBannerAPI } from '@/api/home'
import { DistributionSite } from '@/constants/home'
import type { BannerVO } from '@/types/home'

export const useBanner = () => {
  const bannerList = ref<BannerVO[]>([])

  const getBanner = async () => {
    const res = await getBannerAPI(DistributionSite.CATEGORY)
    bannerList.value = res.result
  }

  onMounted(() => {
    getBanner()
  })

  return {
    bannerList,
  }
}
