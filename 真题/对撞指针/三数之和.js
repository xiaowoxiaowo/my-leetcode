/***
 * leetcode 15
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * 
 * 答案中不可以包含重复的三元组。
 * 
 * 例1：
 * 输入: nums = [-1,0,1,2,-1,-4]
 * 输出: [[-1,-1,2],[-1,0,1]]
 * 
 * 例2:
 * 输入：nums = []
 * 输出：[]
 * 
 * 例3:
 * 输入：nums = [0]
 * 输出：[]
 * 
 * 解题思路：
 * 先对数组进行排序，sort时间复杂度是O(nlogn), 然后遍历一遍数组，遍历的时候通过对撞指针对剩下的数组进行求解,这里是O(n^2)。
 * O(nlogn + n^2)，整体属于O(n^2)的时间复杂度。这里需要注意很多可以提前结束的条件，以及避免数组中重复值的计算。
 */

var threeSum = function(nums) {
  const len = nums.length;
  if (len < 3) return []; // 不足三个数，无解
  nums = nums.sort((a, b) => a - b);
  if (nums[0] > 0 || nums[len - 1] < 0) return []; // 如果最左边大于0，或者最右边小于0，无解
  let L, R, res = [];
  for (let i = 0; i < len; i ++) {
    if (nums[i] > 0) break; // 如果最左边（最小值）大于0，无解
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 如果当前的i与上一个i相等，跳过判断，继续i++
    L = i + 1;
    R = len - 1;
    while(L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]]);
        while(L < R & nums[L] === nums[L + 1]) L++; // 去除重复的结果
        while(L < R & nums[R] === nums[R - 1]) R--;
        L++;
        R--;
      } else if (sum > 0) {
        while(L < R & nums[R] === nums[R - 1]) R--;
        R--;
      } else {
        while(L < R & nums[L] === nums[L + 1]) L++;
        L++;
      }
    }
  }
  return res;
};
