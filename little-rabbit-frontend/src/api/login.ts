import type { LoginDTO, LoginResult } from '@/types/login'
import request from '@/utils/http'

/**
 * @description: 登录-用户名密码
 */
export const loginAPI = (data: LoginDTO) => {
  return request.post<LoginResult>('/login', data)
}
