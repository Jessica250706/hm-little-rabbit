<template>
  <div class="container">
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryData?.parentId}` }">
          {{ categoryData?.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData?.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="params.sortField" @tab-click="handleTabsClick">
        <el-tab-pane label="最新商品" :name="SortField.PUBLISH_TIME" />
        <el-tab-pane label="最高人气" :name="SortField.ORDER_NUM" />
        <el-tab-pane label="评论最多" :name="SortField.EVALUATE_NUM" />
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled || loading">
        <goods-item v-for="good in goodList" :goods="good" :key="good.id" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/api/category'
import { SortField } from '@/constants/category'
import type { CategoryDetailVO, CategoryGoodsParams } from '@/types/category'
import type { Good } from '@/types/home'
import GoodsItem from '@/views/Home/components/GoodsItem.vue'

const route = useRoute()
const categoryId = typeof route.params.subId === 'string' ? route.params.subId : ''

const params = ref<CategoryGoodsParams>({
  page: 1,
  pageSize: 20,
  categoryId,
  sortField: SortField.PUBLISH_TIME,
})
const categoryData = ref<CategoryDetailVO>()
const goodList = ref<Good[]>([])
const loading = ref(false) // 无限加载的锁
const disabled = ref(false)

const getCategoryData = async () => {
  const res = await getCategoryFilterAPI(categoryId)
  categoryData.value = res.result
}

const getGoodList = async () => {
  const res = await getSubCategoryAPI(params.value)
  goodList.value = res.result.items
}

const handleTabsClick = () => {
  params.value.page = 1
  disabled.value = false
  loading.value = false
  getGoodList()
}

const load = async () => {
  if (loading.value || disabled.value) return

  loading.value = true
  params.value.page++

  try {
    const res = await getSubCategoryAPI(params.value)
    const items = res.result.items

    if (items.length === 0) {
      disabled.value = true
      return
    }

    goodList.value.push(...items)

    if (items.length < params.value.pageSize) {
      disabled.value = true
    }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getCategoryData()
  getGoodList()
})
</script>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
