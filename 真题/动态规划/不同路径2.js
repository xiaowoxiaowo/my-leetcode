/***
 * leetcode 63
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 * 
 * 
 * 例1：
 * 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
 * 输出：2
 * 
 * 解释：
 * 3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右
 * 
 * 输入：obstacleGrid = [[0,1],[0,0]]
 * 输出：1
 * 
 * 解题思路：
 * 不同路径的思路，多加了一个障碍物的条件，当你需要计算的上节点或者左节点是障碍物的时候，只需要将其算为0即可。
 * 上边界和左边界也需要对障碍物进行处理，障碍物的右侧以及下侧节点的值都应该为0.
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
	// 处理如果起点就是障碍物的情况
	if (obstacleGrid[0][0] === 1) return 0;
	let x = obstacleGrid.length;
	let y = obstacleGrid[0].length;
	// 遍历上边界，当遇到障碍物，停止循环。这里设值为10是为了跟障碍物的1做区分
	for (let i = 0; i < y; i ++) {
		if (obstacleGrid[0][i] === 1) break;
		obstacleGrid[0][i] = 10;
	}
	// 遍历左边界，当遇到障碍物，停止循环。
	for (let i = 1; i < x; i ++) {
		if (obstacleGrid[i][0] === 1) break;
		obstacleGrid[i][0] = 10;
	}
	for (let i = 1; i < x; i ++) {
		for (let j = 1; j < y; j ++) {
			// 如果当前的节点是障碍物，循环下一个节点
			if (obstacleGrid[i][j] === 1) continue;
			// 如果上侧或者左侧节点是障碍物，值设为0。取节点值需要除10
			const top = (obstacleGrid[i - 1][j] <= 1) ? 0 : obstacleGrid[i - 1][j] / 10;
			const left = (obstacleGrid[i][j - 1] <= 1) ? 0 : obstacleGrid[i][j - 1] / 10;
			// 设置值的时候也需要乘10
			obstacleGrid[i][j] = (top + left) * 10;
		}
	}
	// 最终返回结果
	return obstacleGrid[x - 1][y - 1] / 10;
};
