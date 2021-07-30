/**
 * leetcode 240. 搜索二维矩阵2
 * 
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
 * - 每行的元素从左到右升序排列
 * - 每列的元素从上到下升序排列
 * 
 * 输入：matrix = [
 * [1, 3, 7, 11,15],
 * [4, 5, 8, 12,19],
 * [5, 6, 9, 16,22],
 * [10,13,14,17,24],
 * [18,21,23,26,30]], target = 5
 * 输出：true
 * 
 */
// 其实重点还是找到规律，目标target的值的下面的值都比它大，所以可以从左下角开始遍历。
// 如果当前值大于target，向上一格
// 如果当前值小于target，向右一格
var searchMatrix = function(matrix, target) {
  const xlen = matrix.length;
  const ylen = matrix[0].length;
  let x = xlen - 1, y = 0;
  while (x < xlen && y < ylen) {
    if (matrix[x][y] > target) {
      // 需要注意一下x轴有可能小于0
      if (x === 0) return false;
      x--;
    } else if (matrix[x][y] < target) {
      y++;
    } else {
      return true;
    }
  }
  return false;
};

// const aa = [
//   [1,4,7,11,15],
//   [2,5,8,12,19],
//   [3,6,9,16,22],
//   [10,13,14,17,24],
//   [18,21,23,26,30]];
const aa = [[-5]];

console.log(searchMatrix(aa, -5));
