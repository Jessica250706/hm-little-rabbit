import type { LoginDTO, LoginResult } from '@/types/login'
import request from '@/utils/http'

/**
 * @description: 加入-购物车
 */
export const loginAPI = (data: LoginDTO) => {
  return request.post<LoginResult>('/member/cart', data)
}
