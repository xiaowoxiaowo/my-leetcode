/**
 * leetcode 1711. 大餐计数
 * 
 * 大餐 是指 恰好包含两道不同餐品 的一餐，其美味程度之和等于 2 的幂。
 * 你可以搭配 任意 两道餐品做一顿大餐。
 * 
 * 给你一个整数数组 deliciousness ，其中 deliciousness[i] 是第 i​​​​​​​​​​​​​​ 道餐品的美味程度，返回你可以用数组中的餐品做出的不同 大餐 的数量。结果需要对 10^9 + 7 取余。
 * 
 * 注意，只要餐品下标不同，就可以认为是不同的餐品，即便它们的美味程度相同。
 * 
 * 输入：deliciousness = [1,3,5,7,9]
 * 输出：4
 * 解释：大餐的美味程度组合为 (1,3) 、(1,7) 、(3,5) 和 (7,9) 。
 * 它们各自的美味程度之和分别为 4 、8 、8 和 16 ，都是 2 的幂。
 * 
 * 输入：deliciousness = [1,1,1,3,3,3,7]
 * 输出：15
 * 解释：大餐的美味程度组合为 3 种 (1,1) ，9 种 (1,3) ，和 3 种 (1,7) 
 * 
 */
// 查找表的思路，遍历数组，查找所有2的幂的结果
var countPairs = function(deliciousness) {
  // 计算数组中的最大值，因为是两道菜的之和，所有结果的最大值，不会超过max * 2
  const max = deliciousness.reduce((a, b) => Math.max(a, b), 0) * 2;
  // 需要取模的值
  const MOD = 1000000007;
  const map = new Map();
  let res = 0;
  // 遍历数组
  for (let i = 0; i < deliciousness.length; i ++) {
    const item = deliciousness[i];
    // 遍历1--max里的所有2的幂
    for (let j = 1; j <= max; j *= 2) {
      // 因为都是正整数（可以为0），所以如果当前2的幂小于当前项，不存在负数，所以可以直接跳过
      if (j < item) continue;
      // 如果（当前2的幂 - 当前项）作为key存在于map中，说明存在相应解
      if (map.get(j - item)) {
        // 相应解有几个，结果就加几个
        res += map.get(j - item);
        // 取模
        res = res % MOD;
      }
    }
    // 把数组中的项加入到map中
    map.set(item, map.get(item) ? map.get(item) + 1 : 1);
  }
  return res;
};

// console.log(countPairs([1,3,5,7,9]));
// console.log(countPairs([1,1,1,3,3,3,7]));
console.log([4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192]);
console.log(countPairs([149,107,1,63,0,1,6867,1325,5611,2581,39,89,46,18,12,20,22,234]));
