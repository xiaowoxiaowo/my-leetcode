/***
 * leetcode 62
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 问总共有多少条不同的路径？
 * 
 * 
 * 例1：
 * 输入：m = 3, n = 7
 * 输出：28
 * 
 * 输入：m = 3, n = 2
 * 输出：3
 * 
 * 输入：m = 7, n = 3
 * 输出：28
 * 
 * 输入：m = 3, n = 3
 * 输出：6
 * 
 * 解题思路：
 */
var uniquePaths = function(m, n) {
  let path = [];
  for (let i = 0; i < m; i ++) {
    if (i === 0) {
      path.push(new Array(n).fill(1));
    } else {
      path.push(new Array(n).fill(0));
      path[i][0] = 1;
    }
  }
  for (let i = 2; i < m; i ++) {
    for(let j = 2; j < n; j ++) {
      path[i][j] = path[i - 1][j] + path[i][j - 1];
    }
  }
  return path[m - 1][n - 1];
};
















// var uniquePaths = function(m, n) {
//   const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
//   for (let i = 0; i < m; i++) {
//       f[i][0] = 1;
//   }
//   for (let j = 0; j < n; j++) {
//       f[0][j] = 1;
//   }
//   for (let i = 1; i < m; i++) {
//       for (let j = 1; j < n; j++) {
//           f[i][j] = f[i - 1][j] + f[i][j - 1];
//       }
//   }
//   return f[m - 1][n - 1];
// };


// var uniquePaths = function(m, n) {
//   let ans = 1;
//   for (let x = n, y = 1; y < m; ++x, ++y) {
//       ans = Math.floor(ans * x / y);
//   }
//   return ans;
// };