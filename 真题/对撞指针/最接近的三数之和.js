/***
 * leetcode 16
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。
 * 返回这三个数的和。假定每组输入只存在唯一答案。
 *
 * 
 * 例1：
 * 输入: nums = [-1,2,1,-4], target = 1
 * 输出: 2
 * 
 * 解题思路：
 * 跟三数之和一样，先排序，然后一层遍历，遍历里面使用对撞指针。然后比较得到的值跟target的大小进行指针的移动
 */

var threeSumClosest = function(nums, target) {
  const len = nums.length;
  if (len < 3) return -1;
  nums = nums.sort((a, b) => a - b);
  let l, r, res = -1;
  for (let i = 0; i < len; i ++) {
    if (i > 0 & nums[i] === nums[i - 1]) continue;
    l = i + 1;
    r = len - 1;
    while(l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === target) return target;
      if (res === -1) {
        res = sum;
      } else {
        if (Math.abs(target - res) > Math.abs(target - sum)) res = sum;
      }
      if (sum < target) {
        while(l < r & nums[l] === nums[l + 1]) l++;
        l++;
      } else {
        while(l < r & nums[r] === nums[r - 1]) r--;
        r--;
      }
    }
  }
  return res;
};


console.log(threeSumClosest([0,2,1,-3], 1));