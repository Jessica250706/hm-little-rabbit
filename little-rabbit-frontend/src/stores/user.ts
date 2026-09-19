import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/api/login'
import type { LoginDTO, LoginResult } from '@/types/login'

export const useUserStore = defineStore(
  'user',
  () => {
    // state
    const userInfo = ref<LoginResult>()

    // action
    const getUserInfo = async (data: LoginDTO) => {
      const res = await loginAPI(data)
      userInfo.value = res.result
    }

    const clearUserInfo = () => {
      userInfo.value = undefined
    }

    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    }
  },
  { persist: true },
)
