/**
 * leetcode 930. 和相同的二元子数组
 * 
 * 给你一个二元数组 nums （值只有0和1），和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。
 * 子数组 是数组的一段连续部分。
 * 
 * 输入：nums = [1,0,1,0,1], goal = 2
 * 输出：4
 * 解释：
 * 如下面黑体所示，有 4 个满足题目要求的子数组：
 * [1,0,1]
 * [1,0,1,0]
 * [0,1,0,1]
 * [1,0,1]
 * 
 * 输入：nums = [0,0,0,0,0], goal = 0
 * 输出：15
 * 
 */
// 查找表+前缀和思路，假设有一个(i,j]子数组，只需要sum[j] − sum[i] = goal
// 注意：前缀和都是从下标为0的节点开始的
var numSubarraysWithSum = function(nums, goal) {
  let sum = 0;
  // 赋予初始值，因为如果sum = goal的情况下，存在一种解
  const cnt = new Map([[0, 1]]);
  let ret = 0;
  // 遍历数组
  for (const num of nums) {
    // 计算下一个下标的前缀和
    sum += num;
    // 查看当前有没有符合要求的解
    ret += cnt.get(sum - goal) || 0;
    // 将当前前缀和加入到查找表中
    cnt.set(sum, (cnt.get(sum) || 0) + 1);
  }
  return ret;
};



console.log(numSubarraysWithSum([1,0,1,0,1], 2));