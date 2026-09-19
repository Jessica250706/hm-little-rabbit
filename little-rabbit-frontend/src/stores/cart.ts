import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { AddCartPayload } from '@/types/cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    // state
    const cartList = ref<AddCartPayload[]>([])
    const allCount = computed(() => cartList.value.reduce((a, c) => a + (c.count ?? 0), 0))
    const allPrice = computed(() =>
      cartList.value.reduce((a, c) => a + (c.count ?? 0) * (c.price ? Number(c.price) : 0), 0),
    )

    // action
    const addCart = (goods: AddCartPayload) => {
      // 添加购物车操作
      // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
      const item = cartList.value?.find((item) => goods.skuId === item.skuId)
      if (item) {
        // 已添加过 - count + 1
        item.count = (item.count ?? 0) + 1
      } else {
        // 没有添加过 - 直接 push
        cartList.value?.push(goods)
      }
    }

    const delCart = (skuId: string) => {
      // 1. 找到要删除项的下标值 - splice
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      // 2. 使用数组的过滤方法 - filter
      cartList.value.splice(idx, 1)
    }

    const clearCart = () => {
      cartList.value = []
    }

    return {
      cartList,
      allCount,
      allPrice,
      addCart,
      delCart,
      clearCart,
    }
  },
  { persist: true },
)
