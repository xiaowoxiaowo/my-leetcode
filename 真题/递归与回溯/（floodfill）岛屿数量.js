/***
 * leetcode 200
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 此外，你可以假设该网格的四条边均被水包围。
 * 
 * 例1：
 * 输入：
 * grid =
 * [
 * ["1","1","1","1","0"],
 * ["1","1","0","1","0"],
 * ["1","1","0","0","0"],
 * ["0","0","0","0","0"]
 * ]
 * 输出：1
 * 
 * 输入：
 * grid =
 * [
 * ["1","1","0","0","0"],
 * ["1","1","0","0","0"],
 * ["0","0","1","0","0"],
 * ["0","0","0","1","1"]
 * ]
 * 输出：3
 * 
 * 提示：
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 300
 * 
 * 
 * 解题思路：
 * 类似 单词搜索 的思路，从二维平面上进行递归回溯，还要稍微简单一些。双重循环该数组，然后当值为1的时候，进行dfs。
 * 将连接的所有1的节点全部记录下来。然后继续循环，并判断其他值为1的节点（必须是没有被使用过的节点）。
 */
var numIslands = function(grid) {
	// 二维平面的顺时针递归顺序
	const dirct = [[-1, 0], [0, 1], [1, 0], [0, -1]];
	const lenX = grid.length;
	const lenY = grid[0].length;
	// 初始化一个全是false的二维数组
	let visited = new Array(lenX);
	for (let d = 0; d < lenX; d ++) {
		visited[d] = [];
	}
	let res = 0;
	// 判断当前节点是否存在于给定的二维数组中
	const inArea = (x, y) => {
		return 0 <= x && x < lenX && 0 <= y && y < lenY;
	};
	const dfs = (startX, startY) => {
		// 记录当前的节点
		visited[startX][startY] = true;
		for (let i = 0; i < dirct.length; i ++) {
			const newX = startX + dirct[i][0];
			const newY = startY + dirct[i][1];
			// 只有当顺时针遍历的节点，满足这些条件时，才能继续dfs递归
			if (inArea(newX, newY) && !visited[newX][newY] && grid[newX][newY] === '1') {
				dfs(newX, newY);
			}
		}
	};
	// 双重循环递归二维数组
	for (let i = 0; i < lenX; i ++) { 
		for (let j = 0; j < lenY; j ++) {
			if (grid[i][j] === '1' && !visited[i][j]) {
				// 每当遍历一个为1而且没有被使用过的节点时，将该节点作为顶部节点，将连接它的所有节点都记录下来
				dfs(i, j);
				// 发现的岛屿数量加1
				res++;
			}
		}
	}
	return res;
};


// 不需要定义visited记录访问的数据，直接修改递归过的值即可
var numIslands = function(grid) {
	const dirct = [[-1, 0], [0, 1], [1, 0], [0, -1]];
	const lenX = grid.length;
	const lenY = grid[0].length;
	let res = 0;
	const inArea = (x, y) => {
		return 0 <= x && x < lenX && 0 <= y && y < lenY;
	};
	const dfs = (startX, startY) => {
		grid[startX][startY] = '11';
		for (let i = 0; i < dirct.length; i ++) {
			const newX = startX + dirct[i][0];
			const newY = startY + dirct[i][1];
			if (inArea(newX, newY) && grid[newX][newY] === '1') {
				dfs(newX, newY);
			}
		}
	};
	for (let i = 0; i < lenX; i ++) { 
		for (let j = 0; j < lenY; j ++) {
			if (grid[i][j] === '1') {
				dfs(i, j);
				res++;
			}
		}
	}
	return res;
};