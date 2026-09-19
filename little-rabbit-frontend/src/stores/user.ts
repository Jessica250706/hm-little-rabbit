import { ref } from 'vue'
import { defineStore } from 'pinia'
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
