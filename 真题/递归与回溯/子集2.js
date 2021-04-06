/***
 * leetcode 90
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 * 
 * 例1：
 * 输入: nums = [1,2,2]
 * 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
 * 
 * 输入：nums = [0]
 * 输出：[[],[0]]
 * 
 * 解题思路：
 * 递归思路，本题难点在于去重。数组中存在重复的元素，但是最终得到的结果中不能有重复子集。
 * 其实思路跟之前的题目差不多，先排序，然后递归时当后一个元素等于前一个元素，跳过当前元素。
 */

var subsetsWithDup = function(nums) {
  const len = nums.length;
  if (len < 1) return [[]];
  if (len === 1) return [[], nums];
  // 先排序，将相同大小的元素聚集到一起
  nums = nums.sort((a, b) => a - b);
  let res = [[]];
  const loop = (start, arr) => {
    // 初始化
    let last = nums[start] - 1;
    for (let i = start; i < len; i ++) {
      // 循环的元素，前后两个元素不能相同
      if (nums[i] !== last) {
        // 记录前一个元素值
        last = nums[i];
        res.push([...arr, nums[i]]);
        if (i !== len - 1) loop(i + 1, [...arr, nums[i]]);
      }
    }
  };
  loop(0, []);
  return res;
};

console.log(subsetsWithDup([1,2,2]));