/**
 * leetcode 1838. 最高频元素的频数
 * 
 * 元素的 频数 是该元素在一个数组中出现的次数。
 * 给你一个整数数组 nums 和一个整数 k 。在一步操作中，你可以选择 nums 的一个下标，并将该下标对应元素的值增加 1 。
 * 执行最多 k 次操作后，返回数组中最高频元素的 最大可能频数 。
 * 
 * 输入：nums = [1,2,4], k = 5
 * 输出：3
 * 解释：对第一个元素执行 3 次递增操作，对第二个元素执 2 次递增操作，此时 nums = [4,4,4] 。
 * 4 是数组中最高频元素，频数是 3 。
 * 
 * 输入：nums = [3,9,6], k = 2
 * 输出：1
 * 
 * 输入：nums = [1,4,8,13], k = 5
 * 输出：2
 * 解释：存在多种最优解决方案：
 * - 对第一个元素执行 3 次递增操作，此时 nums = [4,4,8,13] 。4 是数组中最高频元素，频数是 2 。
 * - 对第二个元素执行 4 次递增操作，此时 nums = [1,8,8,13] 。8 是数组中最高频元素，频数是 2 。
 * - 对第三个元素执行 5 次递增操作，此时 nums = [1,4,13,13] 。13 是数组中最高频元素，频数是 2 。
 * 
 */
// 排序+滑动窗口
// 排序之后数组从小到大排列，如果要获取最大的频数，只要满足区间[i,j], sum[i, j] + k >= (j - i + 1) * j即可说明当前区间的最大频数为j。
// 根据上面的思路，我们配合使用滑动窗口，不断寻找最大的频数
var maxFrequency = function(nums, k) {
  // 对数组排序，让他从小到大排序
  nums = nums.sort((a, b) => a - b);
  const len = nums.length;
  if (len <= 1) return len;
  let left = 0, right = 0, sum = nums[0], max = 1;
  // 滑动窗口遍历，当right === len时，左指针开始右移，得到值都是比当前小的，所以可以直接返回结果
  while (right < len) {
    // 当前滑动窗口里元素的项
    const count = (right - left + 1);
    // 当前滑动窗口的值最大的项，即最右侧的元素
    const val = count * nums[right];
    // 如果满足条件，说明当前区间满足值都为一样的条件
    if (sum + k >= val) {
      // 保留较大值，滑动窗口右指针右移,计算新的元素之和
      max = Math.max(max, count);
      right++;
      sum = sum + nums[right];
    } else {
      // 滑动窗口左指针右移，计算新的元素之和
      sum = sum - nums[left];
      left++;
    }
  }
  return max;
};

console.log(maxFrequency([3,9,6], 2));
console.log(maxFrequency([1,2,4], 5));
console.log(maxFrequency([1,4,8,13], 5));