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
 * 
 */
var solve = function(board) {

};