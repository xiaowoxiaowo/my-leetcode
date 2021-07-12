/***
 * leetcode 215
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 
 * 例1：
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 * 
 * 例2:
 * 输入：[9] 和 k = 1
 * 输出：9
 * 
 * 思路: 三路快速排序
 */

function swap(nums, i, j) {
  if (i === j) return;
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function quickSort3Way(nums, l, r, k, len) {
  if (l === r) return nums[l];
  let randomNum = Math.floor(Math.random()*(r - l) + l);
  // 对于相对有序的数组，尽量避免时间复杂度退化成O(n^2)
  swap(nums, l, randomNum);
  let v = nums[l], lt = l, gt = r + 1, i = l + 1;
  // 使用三路快排
  while(i < gt) {
    if (nums[i] > v) {
      swap(nums, i , gt - 1);
      gt--;
    } else if (nums[i] < v) {
      swap(nums, i , lt + 1);
      lt++;
      i++;
    } else {
      i++;
    }
  }
  swap(nums, l, lt);
  // 用快排的标准位跟len - k（要查询元素在排序完成之后应该在的位置）做比较来判断，向左或者向右查询
  if (len - k >= gt) {
    return quickSort3Way(nums, gt, len - 1, k, len);
  } else if (len - k < lt){
    return quickSort3Way(nums, 0, lt, k, len);
  } else {
    return nums[lt];
  }
}

var findKthLargest = function(nums, k) {
  const len = nums.length;
  if (len === 1) return nums[0];
  return quickSort3Way(nums, 0, len - 1, k, len);
};