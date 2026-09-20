import { ref } from 'vue'
import { getCheckoutInfoAPI } from '@/api/order'
import type { CheckoutInfoResult, UserAddress } from '@/types/order'

const checkInfo = ref<CheckoutInfoResult>()
const curAddress = ref<UserAddress>()

export const useCheckoutInfo = () => {
  const getCheckInfo = async () => {
    const res = await getCheckoutInfoAPI()
    checkInfo.value = res.result
    // 适配默认地址
    curAddress.value = checkInfo.value.userAddresses.find((item) => item.isDefault === 0)
  }

  const changeCurAddress = (newAddress?: UserAddress) => {
    curAddress.value = newAddress ?? curAddress.value
  }

  return {
    checkInfo,
    curAddress,
    getCheckInfo,
    changeCurAddress,
  }
}
