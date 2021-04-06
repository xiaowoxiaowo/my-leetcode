/***
 * leetcode 78
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 
 * 说明：
 * nums 中的所有元素 互不相同
 * 
 * 例1：
 * 输入: nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * 输入：nums = [0]
 * 输出：[[],[0]]
 * 
 * 解题思路：
 * 递归思路，重点在于每次遍历，都需要把当前值存入一次结果数组
 */

var subsets = function(nums) {
  const len = nums.length;
  // 边际情况处理
  if (len < 1) return [[]];
  if (len === 1) return [[], nums];
  let res = [[]];
  const loop = (start, arr) => {
    for (let i = start; i < len; i ++) {
      // 每次循环都把当前值存入结果数组
      res.push([...arr, nums[i]]);
      // 如果循环已经是最后一次，不需要再重复递归loop。
      if (i !== len - 1) loop(i + 1, [...arr, nums[i]]);
    }
  };
  loop(0, []);
  return res;
};

console.log(subsets([1,2,3]));
