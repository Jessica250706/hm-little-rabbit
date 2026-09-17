<template>
  <div>Hello Vue3</div>
  <el-button type="primary">click</el-button>
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
