/**
 * leetcode 128. 最长连续序列
 * 
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * 
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 * 
 * 输入：nums = [0,3,7,2,5,8,4,6,0,1]
 * 输出：9
 * 
 */
// 哈希表思路
var longestConsecutive = function(nums) {
  const len = nums.length;
  if (len <= 1) return len;
  const map = new Set();
  // 先把所有数字存入Set数组中
  for (let i = 0; i < len; i ++) {
    map.add(nums[i]);
  }
  let max = 1;
  // 遍历Set数组
  for (let v of map) {
    // 当该值为当前序列的最小值时
    if (!map.has(v - 1)) {
      let curMax = 1;
      let curIndex = v + 1;
      // 遍历当前序列，不断加1，直到序列中断，得到当前序列的长度
      while (map.has(curIndex)) {
        curMax++;
        curIndex++;
      }
      // 得到最大值
      max = Math.max(max, curMax);
    }
  }
  return max;
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));