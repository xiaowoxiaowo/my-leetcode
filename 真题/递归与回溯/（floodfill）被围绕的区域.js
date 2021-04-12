/***
 * leetcode 130
 * 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，
 * 并将这些区域里所有的 'O' 用 'X' 填充。
 * 
 * 例1：
 * 输入：
 * board =
 * [
 * xxxx
 * xoox
 * xxox
 * xoxx
 * ]
 * 输出：
 * [
 * xxxx
 * xxxx
 * xxxx
 * xoxx
 * ]
 * 解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，
 * 或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 * 
 * 
 * 输入：
 * board = [["X"]]
 * 输出：[["X"]]
 * 
 * 提示：
 * m == board.length
 * n == board[i].length
 * 1 <= m, n <= 300
 * 
 * 解题思路：
 * floodfill 的递归思路，不过一开始的循环思路需要有些改变。思路应该是遍历board中位于四个边界线上的所有值为O的节点。
 * 以该节点为顶部节点，递归所有相邻的O的节点，把它的值修改为OO。递归完成之后，再次循环遍历一遍board，把数据改成相应结果。
 */
var solve = function(board) {
  let x = board.length;
  let y = board[0].length;
  // 如果x和y都小于等于2，直接返回，因为所有节点都处于边界线上。
  if (x <= 2 || y <= 2) return board;
  // 从上右下左的顺序，递归所有相邻节点
  const dirct = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  // 判断当前坐标是否在board中
  const inArea = (lenX, lenY) => 0 <= lenX && lenX < x && 0 <= lenY && lenY < y;
  // 判断当前坐标是否在board的边界上
  const inBorder = (lenX, lenY) => lenX === 0 || lenY === 0 || lenX === x - 1 || lenY === y - 1;
  const dfs = (startX, startY) => {
    for (let i = 0; i < dirct.length; i ++) {
      // 把符合要求的节点值设为OO
      board[startX][startY] = 'OO';
			const newX = startX + dirct[i][0];
			const newY = startY + dirct[i][1];
      // 如果相邻的节点处于board中而且值为O,继续递归
      // 因为这里直接修改了值，所以不需要再设置缓存，每次递归都不会重复调用已经被改为OO的节点
      if (inArea(newX, newY) && board[newX][newY] === 'O') dfs(newX, newY);
    }
  };
  for (let i = 0; i < x; i ++) {
    for (let j = 0; j < y; j ++) {
      // 循环遍历board中位于四个边界线上的所有值为O的节点。
      if (inBorder(i, j) && board[i][j] === 'O') dfs(i, j);
    }
  }
  // 最后的数据处理
  for (let i = 0; i < x; i ++) {
    for (let j = 0; j < y; j ++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === 'OO') {
        board[i][j] = 'O';
      }
    }
  }
  return board;
};
