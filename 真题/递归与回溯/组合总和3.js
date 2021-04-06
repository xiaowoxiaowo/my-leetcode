/***
 * leetcode 216
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 
 * 说明：
 * 所有数字（包括 n）都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 例1：
 * 输入: k = 3, n = 7
 * 输出：[[1,2,4]]
 * 
 * 输入：k = 3, n = 9
 * 输出：[[1,2,6], [1,3,5], [2,3,4]]
 * 
 * 解题思路：
 * 递归思路，本题较简单，条件限制比较多，需要考虑的情况很少。1-9的数字从小到大遍历即可，再注意一下k个数
 */

var combinationSum3 = function(k, n) {
  // 边界情况处理（这些不加也行，只为了减少内存消耗）
  if (k < 1) return [];
  if (n === 1 && k > 1) return [];
  if (n === 1 && k === 1) return [[1]];
  if (k === 1 && n <= 9 && n >= 1) return [[n]];
  let res = [];
  const loop = (start, val, arr) => {
    // 优化点，只遍历数组长度小于等于k的情况
    if (arr.length === k) return;
    for (let i = start; i <= 9; i ++) {
      const curVal = val + i;
      if (curVal < n) {
        // 如果值比n小，继续递归
        loop(i + 1, curVal, [...arr, i]);
      } else if (curVal === n && arr.length === k - 1) {
        // 如果值等于n，而且数组必须是k个数
        res.push([...arr, i]);
        // 直接返回，后续不需要再递归
        return;
      } else {
        // 直接返回，后续不需要再递归
        return;
      }
    }
  };
  loop(1, 0, []);
  return res;
};