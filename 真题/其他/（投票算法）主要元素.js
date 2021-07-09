/**
 * 面试题 17.10. 主要元素
 * 
 * 数组中占比超过一半的元素称之为主要元素。给你一个 整数 数组，找出其中的主要元素。若没有，返回 -1 。
 * 请设计时间复杂度为 O(N) 、空间复杂度为 O(1) 的解决方案。
 * 
 * 输入：[1,2,5,9,5,9,5,5,5]
 * 输出：5
 * 
 * 输入：[3,2]
 * 输出：-1
 * 
 * 输入：[2,2,1,1,1,2,2]
 * 输出：2
 * 
 */
// 时间复杂度为O(N) ，空间复杂度为O(k)，k为不同元素数量
var majorityElement = function(nums) {
  const len = nums.length;
  const map = new Map();
  let max = 0;
  let num;
  for (let i = 0; i < len; i ++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    if (map.get(nums[i]) > max) {
      max = map.get(nums[i]);
      num = nums[i];
    }
  }
  if (max > Math.floor(len / 2)) {
    return num;
  }
  return -1;
};
// 时间复杂度为O(N) ，空间复杂度为O(1)
// 因为所求的是超过一半的元素，所以可以使用投票算法
var majorityElement = function(nums) {
  let candidate = -1;
  let count = 0;
  for (const num of nums) {
    // 当count === 0时，给candidate赋值为num
    // 有两种情况，一种是第一次循环，第二种是上一个元素被不同的元素抵消掉了
    if (count === 0) {
        candidate = num;
    }
    // 如果相等，给count计数加1
    // 如果不相等，减1
    // 类似于，碰到一样的元素就+1，碰到不一样的元素就减1
    // 因为所求的主要元素超过元素的一半，主要元素数量 - 其他所有元素的数量 > 0
    // 所以如果存在主要元素，candidate即为该元素
    if (num === candidate) {
        count++;
    } else {
        count--;
    }
  }
  count = 0;
  // 计算candidate元素的总数量
  const length = nums.length;
  for (const num of nums) {
    if (num === candidate) {
      count++;
    }
  }
  // 如果数量超过一半，即为主要元素
  return count * 2 > length ? candidate : -1;
};