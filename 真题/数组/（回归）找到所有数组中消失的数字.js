/**
 * leetcode 448. 找到所有数组中消失的数字
 * 
 * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。
 * 请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
 * 
 * 输入：nums = [4,3,2,7,8,2,3,1]
 * 输出：[5,6]
 * 
 * 输入：nums = [1,1]
 * 输出：[2]
 * 
 * 进阶：你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 
 * 你可以假定返回的数组不算在额外空间内。
 */
// 回归的思路，将当项的值回归到对应的位置
var findDisappearedNumbers = function(nums) {
  const len = nums.length;
  for (let num of nums) {
    // 计算当前项的值对应的位置，需要取len的余，因为当前值可能已经 + len
    const x = (num - 1) % len;
    // 将对应位置的值 + len，用于后续的使用
    nums[x] += len;
  }
  const res = [];
  // 遍历nums数组，如果值小于等于len，说明没有值回归到当前项，这个项的下标就是消失的数字
  for (let i = 0; i < len; i ++) {
    if (nums[i] <= len) {
      // 这里需要取下标
      res.push(i + 1);
    }
  }
  return res;
};

findDisappearedNumbers([4,3,2,7,8,2,3,1]);