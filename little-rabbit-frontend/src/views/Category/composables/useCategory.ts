// 封装分类数据业务相关代码
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getCategoryAPI } from '@/api/category'
import type { CategoryVO } from '@/types/category'

export function useCategory() {
  const route = useRoute()

  const categoryData = ref<CategoryVO>()

  const getCategory = async (id: string) => {
    // 如何在 setup 中获取路由参数 useRoute() -> route 等价于this.$route
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }

  watch(
    () => route.params.id,
    (id) => {
      if (typeof id === 'string') {
        getCategory(id)
      }
    },
    { immediate: true },
  )

  return {
    categoryData,
  }
}
