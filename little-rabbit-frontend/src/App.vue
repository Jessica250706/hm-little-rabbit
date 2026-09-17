<template>
  <!-- 一级路由出口组件 -->
  <router-view />
</template>

<script lang="ts" setup>
import { getCategory } from '@/api/testAPI'
import { onMounted } from 'vue'

onMounted(() => {
  getCategory().then((res) => {
    console.log('res:', res)
  })
})
</script>

<style lang="scss" scoped></style>
