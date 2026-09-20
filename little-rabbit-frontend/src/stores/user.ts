import { ref } from 'vue'
import { defineStore } from 'pinia'
import { mergeCartAPI } from '@/api/cart'
import { loginAPI } from '@/api/login'
import type { LoginDTO, LoginResult } from '@/types/login'
import { useCartStore } from './cart'

export const useUserStore = defineStore(
  'user',
  () => {
    const cartStore = useCartStore()

    // state
    const userInfo = ref<LoginResult>()

    // action
    const getUserInfo = async (data: LoginDTO) => {
      const res = await loginAPI(data)
      userInfo.value = res.result
      // 合并购物车
      const params = cartStore.cartList.map((item) => {
        return {
          skuId: item.skuId ?? '',
          selected: item.selected ?? false,
          count: item.count ?? 0,
        }
      })
      await mergeCartAPI(params)
      cartStore.updateCartList()
    }

    const clearUserInfo = () => {
      userInfo.value = undefined
      // 清空购物车
      cartStore.clearCart()
    }

    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    }
  },
  { persist: true },
)
