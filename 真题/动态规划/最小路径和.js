/***
 * leetcode 64
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 每次只能向下或者向右移动一步。
 * 
 * 
 * 例1：
 * 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
 * 1 3 1
 * 1 5 1
 * 4 2 1
 * 输出：7
 * 解释： 因为路径 1→3→1→1→1 的总和最小。
 * 
 * 输入： grid = [[1,2,3],[4,5,6]]
 * 1 2 3
 * 4 5 6
 * 输出： 12
 * 
 * 说明：
 * m == grid.length
 * n == grid[i].length
 * 
 * 解题思路：
 * 动态规划思路，从左往右，从上往下的顺序遍历，每一个节点都存入到达当前节点的最小值。
 * 需要区分三种情况
 * 1.上边界的节点，这些节点没有上节点，所以只需要计算左节点即可
 * 2.左边界的节点，同理，只计算上节点
 * 3.其他节点，因为每个节点存的都是到达该节点的最小路径，所以只需要计算上节点和左节点较小的那个值即可
 */
var minPathSum = function(grid) {
  let x = grid.length;
  let y = grid[0].length;
  // 边界条件处理
  if (x === 1 && y === 1) return grid[0][0];
  // 循环递归
  for (let i = 0; i < x; i ++) {
    for (let j = 0; j < y; j ++) {
      // 跳过初始位置
      if (i === 0 && j === 0) continue;
      // 上边界节点
      if (i === 0) {
        grid[i][j] = grid[i][j] + grid[i][j - 1];
        continue;
      }
      // 左边界节点
      if (j === 0) {
        grid[i][j] = grid[i][j] + grid[i - 1][j];
        continue;
      }
      // 其他节点，取上节点和左节点较小的那个值
      grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + grid[i][j];
    }
  }
  return grid[x -1][y - 1];
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
console.log(minPathSum([[1,2,3],[4,5,6]]));