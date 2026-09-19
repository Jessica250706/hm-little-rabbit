<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <!-- 多模版渲染：区分登录状态和非登录状态 -->
        <template v-if="userStore.userInfo?.token">
          <li>
            <a href="javascript:;">
              <i class="iconfont icon-user"></i>
              {{ userStore.userInfo.account }}
            </a>
          </li>
          <li>
            <el-popconfirm
              cancel-button-text="取消"
              confirm-button-text="确认"
              title="确认退出吗?"
              @confirm="confirm"
            >
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const confirm = () => {
  // 清除当前用户信息
  userStore.clearUserInfo()
  // 返回登录页
  router.replace('/login')
}
</script>

<style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
