<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img alt="" :src="item.imgUrl" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { getBannerAPI } from '@/api/home'
import { DistributionSite } from '@/constants/home'
import type { BannerVO } from '@/types/home'

const bannerList = ref<BannerVO[]>([])

const getBanner = async () => {
  const res = await getBannerAPI(DistributionSite.HOME)
  bannerList.value = res.result
}

onMounted(() => {
  getBanner()
})
</script>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
