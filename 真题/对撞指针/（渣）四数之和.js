/***
 * leetcode 18
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，
 * 使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 
 * 答案中不可以包含重复的四元组。
 * 
 * 例1：
 * 输入: nums = [1,0,-1,0,-2,2], target = 0
 * 输出: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 * 
 * 例2:
 * 输入：nums = [], target = 0
 * 输出：[]
 * 
 * 解题思路：
 * 无趣的题目，毫无意义，三数之和方法外面再套一层循环，O(n^3)。稍微注意下优化的点就可以了。
 */

var fourSum = function(nums, target) {
  const quadruplets = [];
  if (nums.length < 4) {
      return quadruplets;
  }
  nums.sort((x, y) => x - y);
  const length = nums.length;
  for (let i = 0; i < length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break;
    }
    if (nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1] < target) {
      continue;
    }
    for (let j = i + 1; j < length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break;
      }
      if (nums[i] + nums[j] + nums[length - 2] + nums[length - 1] < target) {
        continue;
      }
      let left = j + 1, right = length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
              left++;
          }
          left++;
          while (left < right && nums[right] === nums[right - 1]) {
              right--;
          }
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return quadruplets;
};