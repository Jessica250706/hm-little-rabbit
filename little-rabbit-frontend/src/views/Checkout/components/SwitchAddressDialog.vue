<template>
  <el-dialog v-model="showDialog" center title="切换收货地址" width="30%">
    <div class="addressWrapper">
      <div
        v-for="item in checkInfo?.userAddresses"
        :key="item.id"
        class="text item"
        :class="{ active: item.id === activeAddress?.id }"
        @click="switchAddress(item)"
      >
        <ul>
          <li>
            <span>
              收
              <i />
              货
              <i />
              人：
            </span>
            {{ item.receiver }}
          </li>
          <li>
            <span>联系方式：</span>
            {{ item.contact }}
          </li>
          <li>
            <span>收货地址：</span>
            {{ item.fullLocation + item.address }}
          </li>
        </ul>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showDialog = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { UserAddress } from '@/types/order'
import { useCheckoutInfo } from '../composables/useCheckoutInfo'

const { checkInfo, changeCurAddress } = useCheckoutInfo()
const showDialog = ref(false)
const activeAddress = ref<UserAddress>()

const openAddressDialog = () => {
  showDialog.value = true
}

const switchAddress = (item: UserAddress) => {
  activeAddress.value = item
}

const confirm = () => {
  changeCurAddress(activeAddress.value)
  showDialog.value = false
}

defineExpose({ openAddressDialog })
</script>

<style lang="scss" scoped>
.addressWrapper {
  max-height: 500px;
  overflow-y: auto;
}

.text {
  flex: 1;
  min-height: 90px;
  display: flex;
  align-items: center;

  .none {
    line-height: 90px;
    color: #999;
    text-align: center;
    width: 100%;
  }

  > ul {
    flex: 1;
    padding: 20px;

    li {
      line-height: 30px;

      span {
        color: #999;
        margin-right: 5px;

        > i {
          width: 0.5em;
          display: inline-block;
        }
      }
    }
  }

  > a {
    color: $xtxColor;
    width: 160px;
    text-align: center;
    height: 90px;
    line-height: 90px;
    border-right: 1px solid #f5f5f5;
  }
}

.text {
  flex: 1;
  min-height: 90px;
  display: flex;
  align-items: center;

  &.item {
    border: 1px solid #f5f5f5;
    margin-bottom: 10px;
    cursor: pointer;

    &.active,
    &:hover {
      border-color: $xtxColor;
      background: lighten($xtxColor, 50%);
    }

    > ul {
      padding: 10px;
      font-size: 14px;
      line-height: 30px;
    }
  }
}
</style>
