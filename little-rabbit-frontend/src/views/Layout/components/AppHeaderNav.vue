<template>
  <ul class="app-header-nav">
    <li class="home">
      <RouterLink active-class="active" to="/home">首页</RouterLink>
    </li>
    <li v-for="category in categoryStore.categoryList" :key="category.id" class="home">
      <RouterLink
        :class="{ active: isCategoryActive(category.id) }"
        :to="`/category/${category.id}`"
      >
        {{ category.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useCategoryStore } from '@/stores/category'

const route = useRoute()
const categoryStore = useCategoryStore()

/**
 * 判断某个一级分类是否处于激活状态
 * 覆盖 /category/:id 和 /category/:id/sub/:subId 两种情况
 */
const isCategoryActive = (id: string) => {
  return route.path.startsWith(`/category/${id}`)
}
</script>

<style scoped lang="scss">
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }

    .active {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }
}
</style>
