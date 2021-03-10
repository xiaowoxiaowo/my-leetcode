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
 */

var threeSum = function(nums) {
  const len = nums.length;
  if (len < 3) return [];
  nums = nums.sort((a, b) => a - b);
  let l = 0, r = len - 1, mid = 0, res = [];
  while(l + 1 < r) {
    const sum = nums[l] + nums[r];
    let mid = Math.floor((r - l)/2);
    const 
    if (len - l === r + 1) {
      l++;
    } else {
      r--;
    }
    if (sum > 0) {
      if (sum + nums[l + 1] > 0) continue;
      while (mid > l) {
        if (sum + nums[mid] === 0) res.push([l, mid, r]);
        mid--;
      }
    } else if (sum < 0) {
      if (sum + nums[r - 1] < 0) continue;
      while (mid < r) {
        if (sum + nums[mid] === 0) res.push([l, mid, r]);
        mid++;
      }
    } else {
      while (mid < r && mid > l) {
        if (nums[mid] === 0) res.push([l, mid, r]);
        if (nums[mid] > 0 && nums[mid - 1] >= 0) {
          mid--;
          continue;
        }
        if (nums[mid] < 0 && nums[mid + 1] <= 0) {
          mid++;
          continue;
        }
        break;
      }
    }
  }
  return res;
};


console.log(threeSum([-1,0,1,2,-1,-4]));
console.log('正确输出: [[-1,-1,2],[-1,0,1]]')