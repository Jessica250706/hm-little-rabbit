<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/category.ts'
import LayoutFixed from './components/LayoutFixed.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutNav from './components/LayoutNav.vue'

const categoryStore = useCategoryStore()

onMounted(() => {
  categoryStore.getCategory()
})
</script>

<style lang="scss" scoped></style>
