/***
 * leetcode 120
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。
 * 
 * 每一步只能移动到下一行中相邻的结点上。
 * 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
 * 也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
 * 
 * 
 * 例1：
 * 输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
 * 输出：11
 * 解释： 如下面简图所示：
 *    2
 *   3 4
 *  6 5 7
 * 4 1 8 3
 * 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 * 
 * 输入： triangle = [[-10]]
 * 输出： -10
 * 
 * 说明：
 * triangle[0].length == 1
 * triangle[i].length == triangle[i - 1].length + 1
 * 
 * 解题思路：
 * 动态规划思路，其实从上到下或者从下到上都可以，推荐从下到上，可以少一个计算数组最小值的操作
 */
var minimumTotal = function(triangle) {
  let h = triangle.length;
  if (h === 1) return triangle[0][0];
  // 从倒数第二行开始遍历
  for (let i = h - 2; i >= 0; i --) {
    for (let j = 0; j < triangle[i].length; j ++) {
      // 遍历节点，从下左侧节点和下右侧节点中取较小的那个值，计算到当前节点
      triangle[i][j] = triangle[i][j] + Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
};


console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));
console.log(minimumTotal([[-10]]));