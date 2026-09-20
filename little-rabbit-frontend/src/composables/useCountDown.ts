/**
 * 封装倒计时逻辑函数
 */
import { computed, onUnmounted, ref } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = () => {
  // 1. 响应式数据
  let timer: number | undefined = undefined
  const time = ref<number>(0)
  // 格式化时间 为 xx分xx秒
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))

  // 2. 开启倒计时的函数
  const start = (currentTime: number) => {
    // 每隔一秒减一
    time.value = currentTime
    timer = setInterval(() => {
      time.value--
    }, 1000)
  }

  // 组件销毁时，清除定时器
  onUnmounted(() => {
    if (timer) {
      clearInterval(timer)
      timer = undefined
    }
  })

  return {
    formatTime,
    start,
  }
}
