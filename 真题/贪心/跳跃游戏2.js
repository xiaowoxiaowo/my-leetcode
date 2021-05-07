/**
 * leetcode 45
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 * 假设你总是可以到达数组的最后一个位置。
 * 
 * 
 * 输入: [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 * 
 * 输入: [2,3,0,1,4]
 * 输出: 2
 * 
 * 
 * 解题思路：
 * 计算最小跳跃数，每一步都尽可能多的去跳跃更多的格子。
 * 其实就是计算，每一个格子可跳跃的范围内，下一个最大的可跳跃距离的节点。
 * 
 */
var jump = function(nums) {
  const len = nums.length;
  // 边界条件处理
  if (len <= 1) return 0;
  // i代表当前的节点下标
  let i = 0, res = 1;
  while(i < len - 1) {
    let curVal = nums[i], distance = 0, lastIndex;
    // 如果当前节点的值加上下标大于等于数组长度，说明已经可以达到终点，返回结果
    if (curVal + i >= len - 1) return res;
    // 遍历当前节点所有可跳跃的节点，计算他们的最大可达到的下标
    for (let j = 1; j <= curVal; j ++) {
      if (nums[j + i] + j + i > distance) {
        // 取当前节点可跳跃范围内的最大节点（节点值 + 节点下标）
        distance = nums[j + i] + j + i;
        lastIndex = j + i;
      }   
    }
    // 跳跃一次，跳跃次数加1
    res++;
    // 将当前节点设为下一个最大节点
    i = lastIndex;
  }
};

console.log(jump([2,3,1,1,4]));
console.log(jump([2,3,0,1,4]));