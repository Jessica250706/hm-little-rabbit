/**
 * 生成集合的幂集（所有子集）
 * @param originalSet 原始集合
 * @returns 所有子集组成的二维数组
 */
export default function bwPowerSet<T>(originalSet: T[]): T[][] {
  const subSets: T[][] = []

  // 共有 2^n 种组合（n 为原始集合长度），
  // 因为每个元素都有"包含/不包含"两种选择。
  const numberOfCombinations = 2 ** originalSet.length

  // 0 到 2^n 之间每个数的二进制表示，恰好对应一种组合方式：
  // 每一位（0 或 1）表示是否包含该位置的元素。
  // 例如集合 {1, 2, 3}，二进制 0b010 表示只包含 "2"。
  for (let combinationIndex = 0; combinationIndex < numberOfCombinations; combinationIndex += 1) {
    const subSet: T[] = []

    for (let setElementIndex = 0; setElementIndex < originalSet.length; setElementIndex += 1) {
      // 判断当前元素是否要加入子集
      if (combinationIndex & (1 << setElementIndex)) {
        subSet.push(originalSet[setElementIndex])
      }
    }

    subSets.push(subSet)
  }

  return subSets
}
