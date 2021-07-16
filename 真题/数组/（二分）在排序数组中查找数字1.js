/**
 * 剑指 Offer 53 - I. 在排序数组中查找数字 I
 * 
 * 统计一个数字在排序数组中出现的次数。
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: 2
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: 0
 */
// 这种题目肯定是考二分查询，具体步骤比较简单，不解析了
var search = function(nums, target) {
  const len = nums.length;
  let left = 0, right = len - 1;
  let sum = 1;
  while(left <= right) {
    const mid = Math.floor(left / 2 + right / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      let index1 = mid - 1;
      let index2 = mid + 1;
      while (index1 >= 0) {
        if (nums[index1] === target) {
          sum++;
          index1--;
          continue;
        }
        break;
      }
      while (index2 < len) {
        if (nums[index2] === target) {
          sum++;
          index2++;
          continue;
        }
        break;
      }
      return sum;
    }
  }
  return 0;
};

console.log(search([5,7,7,8,8,10], 8));