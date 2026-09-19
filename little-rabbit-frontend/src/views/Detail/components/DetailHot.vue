<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink v-for="item in hotGoods" :key="item.id" class="goods-item" to="/">
      <img alt="" :src="item.picture" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getHotGoodsAPI } from '@/api/goods'
import { HotType } from '@/constants/goods'
import type { HotTypeType } from '@/constants/goods'
import type { Good } from '@/types/goods'

const props = defineProps<{
  type: HotTypeType
}>()

const TITLE_TYPE_MAP = {
  [HotType.DAY]: '24小时热榜',
  [HotType.WEEK]: '每周热榜',
}

const route = useRoute()
const id = typeof route.params.id === 'string' ? route.params.id : ''
const title = computed(() => TITLE_TYPE_MAP[props.type])

const hotGoods = ref<Good[]>()

const getHotGoods = async () => {
  const res = await getHotGoodsAPI({ id, type: props.type })
  hotGoods.value = res.result
}

onMounted(() => {
  getHotGoods()
})
</script>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>
