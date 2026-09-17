import type { CategoryVO } from '@/types/home'
import httpInstance from '@/utils/http'

export const getCategoryAPI = () => {
  return httpInstance.get<CategoryVO[]>('/home/category/head')
}
