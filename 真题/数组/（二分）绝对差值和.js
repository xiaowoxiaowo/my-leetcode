/**
 * leetcode 1818. 绝对差值和
 * 
 * 给你两个正整数数组 nums1 和 nums2 ，数组的长度都是 n 。
 * 数组 nums1 和 nums2 的 绝对差值和 定义为所有 |nums1[i] - nums2[i]|（0 <= i < n）的 总和（下标从 0 开始）。
 * 你可以选用 nums1 中的 任意一个 元素来替换 nums1 中的 至多 一个元素，以 最小化 绝对差值和。
 * 在替换数组 nums1 中最多一个元素 之后 ，返回最小绝对差值和。因为答案可能很大，所以需要对 10 ^ 9 + 7 取余 后返回。
 * 
 * |x| 定义为：
 * - 如果 x >= 0 ，值为 x ，或者
 * - 如果 x <= 0 ，值为 -x
 * 
 * 输入：nums1 = [1,7,5], nums2 = [2,3,5]
 * 输出：3
 * 解释：有两种可能的最优方案：
 * - 将第二个元素替换为第一个元素：[1,7,5] => [1,1,5] ，或者
 * - 将第二个元素替换为第三个元素：[1,7,5] => [1,5,5]
 * 两种方案的绝对差值和都是 |1-2| + (|1-3| 或者 |5-3|) + |5-5| = 3
 * 
 * 输入：nums1 = [2,4,6,8,10], nums2 = [2,4,6,8,10]
 * 输出：0
 * 解释：nums1 和 nums2 相等，所以不用替换元素。绝对差值和为 0
 * 
 * 输入：nums1 = [1,10,4,4,2,7], nums2 = [9,3,5,1,7,4]
 * 输出：20
 * 解释：将第一个元素替换为第二个元素：[1,10,4,4,2,7] => [10,10,4,4,2,7]
 * 绝对差值和为 |10-9| + |10-3| + |4-5| + |4-1| + |2-7| + |7-4| = 20
 * 
 */
// 排序 + 二分法思路，复制一份nums1数组然后进行排序，每次遍历之后，在复制数组中找到最接近该值的值
var minAbsoluteSumDiff = function(nums1, nums2) {
  const MOD = 1000000007;
  const len = nums1.length;
  // 复制一个nums1数组
  const arr = [...nums1].sort((a, b) => a - b);
  let max = 0, sum = 0;
  for (let i = 0; i < len; i ++) {
    // 遍历数组中所有的值
    const val = Math.abs(nums1[i] - nums2[i]);
    sum = (sum + val) % MOD;
    // 在数组中找到最接近该值的值，这里存在两种情况
    // 1.找到相同的值
    // 2.不存在相同的值，需要找到最接近的大于该值与小于该值的值
    // 这里使用二分查找法
    const index = binarySearch(arr, nums2[i]);
    // 这里需要处理一些特殊情况，如果index  < index，即除去list中所有值都比target小的情况
    if (index < len) max = Math.max(max, val - Math.abs(arr[index] - nums2[i]));
    // 因为index肯定是第一个大于或者等于target的值
    // 所以当index不是最小元素时，还需要比较一下，小于target的最大值，即arr[index - 1]
    if (index > 0) max = Math.max(max, val - Math.abs(arr[index - 1] - nums2[i]));
  }
  // 这里需要先加一下MOD，因为max有可能大于MOD的值
  return (sum - max + MOD) % MOD;
};

const binarySearch = (list, target) => {
  let left = 0, right = list.length - 1;
  // 如果list[right] < target，说明list中所有值都比target小，所以只需要计算list[right - 1]值即可
  if (list[right] < target) return right + 1;
  while (left < right) {
    const mid = Math.floor(left / 2 + right / 2);
    if (list[mid] < target) {
      // 如果当前项小于target
      left = mid + 1;
    } else {
      // 这里需要注意，因为我们不一定需要获取等于target的值，
      // 也可能找不到值，需要获取最接近的两个值
      // 所以这里应该赋值mid，防止left > target
      right = mid;
    }
  }
  // 这里得到的left，肯定是第一个大于或者等于target的值
  return left;
}

console.log(minAbsoluteSumDiff([1,28,21], [9,21,20]));