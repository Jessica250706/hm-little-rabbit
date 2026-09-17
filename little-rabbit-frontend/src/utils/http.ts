import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

export interface ApiResponse<T = unknown> {
  code: string
  msg: string
  result: T
}

interface HttpInstance {
  <T = unknown>(config: AxiosRequestConfig): Promise<ApiResponse<T>>
  <T = unknown>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>>
  request<T = unknown>(config: AxiosRequestConfig): Promise<ApiResponse<T>>
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>>
  delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>>
  head<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>>
  options<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>>
  post<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>>
  put<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>>
  patch<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>>
}

const httpInstance = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

httpInstance.interceptors.request.use(
  (config) => config,
  (e) => Promise.reject(e),
)

httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => Promise.reject(e),
)

export default httpInstance as HttpInstance
