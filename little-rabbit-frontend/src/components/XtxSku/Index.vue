<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.id">
      <dt>{{ item.name }}</dt>
      <dd>
        <template v-for="val in item.values" :key="val.name">
          <img
            v-if="val.picture"
            :class="{ selected: val.selected, disabled: val.disabled }"
            :src="val.picture"
            @click="clickSpecs(item, val)"
          />
          <span
            v-else
            :class="{ selected: val.selected, disabled: val.disabled }"
            @click="clickSpecs(item, val)"
          >
            {{ val.name }}
          </span>
        </template>
      </dd>
    </dl>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import type { GoodsDetailVO, ResultSpec, Skus, SpecValue } from '@/types/goods'
import getPowerSet from './power-set'
import type { PathMap, SkuChangePayload } from './type'

type SkuGoods = Pick<GoodsDetailVO, 'specs' | 'skus'>

const spliter = '★'

/* ---------------- Props / Emits ---------------- */

const props = withDefaults(
  defineProps<{
    /** specs: 所有规格信息  skus: 所有 sku 组合 */
    goods: SkuGoods
  }>(),
  {
    goods: () => ({ specs: [], skus: [] }),
  },
)

const emit = defineEmits<{
  change: [payload: SkuChangePayload]
}>()

/* ---------------- 纯函数工具 ---------------- */

/** 根据 skus 数据得到路径字典对象 */
const getPathMap = (skus: Skus[]): PathMap => {
  const pathMap: PathMap = {}
  if (!skus?.length) return pathMap

  skus.forEach((sku) => {
    // 1. 过滤出有库存有效的 sku
    if (!sku.inventory) return

    // 2. 得到 sku 属性值数组
    const specs = sku.specs.map((spec) => spec.valueName)
    // 3. 得到 sku 属性值数组的子集
    const powerSet = getPowerSet(specs)
    // 4. 设置给路径字典对象
    powerSet.forEach((set) => {
      const key = set.join(spliter)
      ;(pathMap[key] ??= []).push(sku.id)
    })
  })

  return pathMap
}

/** 初始化禁用状态 */
const initDisabledStatus = (specs: ResultSpec[], pathMap: PathMap): void => {
  specs?.forEach((spec) => {
    spec.values.forEach((val) => {
      val.disabled = !pathMap[val.name]
    })
  })
}

/** 得到当前选中规格集合 */
const getSelectedArr = (specs: ResultSpec[]): (string | undefined)[] => {
  return specs.map((spec) => spec.values.find((val) => val.selected)?.name)
}

/** 更新按钮的禁用状态 */
const updateDisabledStatus = (specs: ResultSpec[], pathMap: PathMap): void => {
  specs.forEach((item, i) => {
    const selectedArr = getSelectedArr(specs)
    item.values.forEach((val) => {
      if (val.selected) return
      selectedArr[i] = val.name
      // 去掉 undefined 之后组合成 key
      const key = selectedArr.filter(Boolean).join(spliter)
      val.disabled = !pathMap[key]
    })
  })
}

/* ---------------- 组件逻辑 ---------------- */

const pathMap = ref<PathMap>({})

watchEffect(() => {
  pathMap.value = getPathMap(props.goods.skus)
  initDisabledStatus(props.goods.specs, pathMap.value)
})

const clickSpecs = (item: ResultSpec, val: SpecValue): void => {
  if (val.disabled) return

  // 选中与取消选中逻辑
  if (val.selected) {
    val.selected = false
  } else {
    item.values.forEach((bv) => {
      bv.selected = false
    })
    val.selected = true
  }

  // 点击之后再次更新选中状态
  updateDisabledStatus(props.goods.specs, pathMap.value)

  // 把选择的 sku 信息传出去给父组件
  const selectedArr = getSelectedArr(props.goods.specs).filter((value): value is string => !!value)

  // 未全部选中，传出空对象
  if (selectedArr.length !== props.goods.specs.length) {
    emit('change', {})
    return
  }

  // 从路径字典中得到 skuId
  const key = selectedArr.join(spliter)
  const skuId = pathMap.value[key]?.[0]
  const sku = props.goods.skus.find((s) => s.id === skuId)
  if (!sku) return

  emit('change', {
    skuId: sku.id,
    price: sku.price,
    oldPrice: sku.oldPrice,
    inventory: sku.inventory,
    specsText: sku.specs.reduce((p, n) => `${p} ${n.name}：${n.valueName}`, '').trim(),
  })
}
</script>

<style scoped lang="scss">
@mixin sku-state-mixin {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;

  &.selected {
    border-color: $xtxColor;
  }

  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}

.goods-sku {
  padding-left: 10px;
  padding-top: 20px;

  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;

    dt {
      width: 50px;
      color: #999;
    }

    dd {
      flex: 1;
      color: #666;

      > img {
        width: 50px;
        height: 50px;
        margin-bottom: 4px;
        @include sku-state-mixin;
      }

      > span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        margin-bottom: 4px;
        @include sku-state-mixin;
      }
    }
  }
}
</style>
