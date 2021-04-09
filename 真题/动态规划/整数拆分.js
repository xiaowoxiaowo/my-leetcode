/***
 * leetcode 343
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
 * 
 * 
 * 例1：
 * 输入：2
 * 输出：1
 * 解释: 2 = 1 + 1, 1 × 1 = 1。
 * 
 * 输入：10
 * 输出：36
 * 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 * 
 * 说明：
 *  n 不小于 2 且不大于 58。
 * 
 * 解题思路：
 */
// 先用递归的思路实现,递归思路，重点在于每一层都要找到那个乘积最大的值，然后再更上层相比
var integerBreak = function(n) {
  if (n === 1) return 1;
  let res = -1;
  for (let i = 1; i < n; i ++) {
    // 这里还需要跟i * (n - i)做比较，因为integerBreak会把值再次分成两份
    // 所以还需要比较分为两个数的乘积大小
    res = Math.max(res, Math.max(i * (n - i), i * integerBreak(n - i)))
  }
  return res;
};

// 记忆化搜索
// 这个可以作为全局缓存，因为所有的测试例子中，只要数字相同，得到的乘积最大值都是一样的
let cache = [];
var integerBreak = function(n) {
  if (n === 1) return 1;
  if (cache[n])  return cache[n];
  let res = -1;
  for (let i = 1; i < n; i ++) {
    res = Math.max(res, Math.max(i * (n - i), i * integerBreak(n - i)))
  }
  cache[n] = res;
  return res;
};

// 动态规划,自底向上
let cache = [];
const max3 = (d1, d2, d3) => {
  return Math.max(d1, Math.max(d2, d3));
};
var integerBreak = function(n) {
  cache[1] = 1;
  for (let i = 2; i <= n; i ++) {
    for (let j = 1; j < i; j ++) {
      cache[i] = max3(cache[i] || -1, j * (i - j), j * cache[i - j]);
    }
  }
  return cache[n];
};