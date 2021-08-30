/**
 * leetcode 560. 和为K的子数组
 * 
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
 * 
 * 输入:nums = [1,1,1], k = 2
 * 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
 */
// 前缀和+查找表，查找表使用map数据结构，比对象快好多
var subarraySum = function(nums, k) {
  const len = nums.length;
  let sum = nums[0];
  let res = sum === k ? 1 : 0;
  const map = new Map();
  map.set(sum, 1);
  for (let i = 1; i < len; i ++) {
    sum = nums[i] + sum;
    if (sum === k) res++;
    if (map.has(sum - k)) res += map.get(sum - k);
    map.set(sum, map.get(sum) ? map.get(sum) + 1 : 1);
  }
  return res;
};

console.log(subarraySum([1,2,3], 3));