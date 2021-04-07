/***
 * leetcode 79
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 * 
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
 * 同一个单元格内的字母不允许被重复使用。
 * 
 * 例1：
 * 输入：
 * board =
 * [
 * ['A','B','C','E'],
 * ['S','F','C','S'],
 * ['A','D','E','E']
 * ]
 * 给定 word = "ABCCED", 返回 true
 * 给定 word = "SEE", 返回 true
 * 给定 word = "ABCB", 返回 false
 * 
 * 提示：
 * board 和 word 中只包含大写和小写英文字母。
 * 
 * 解题思路：
 * 递归思路，本题是在二维网格上找到符合要求的单词，重点在于递归的形式，对于二维数组，
 * 可以先双重循环头元素，然后选定一个方向顺序，比如从上右下左的顺序去继续递归，然后得出结论。
 * 还需要记录已经被使用的元素。
 */

var exist = function(board, word) {
	// 定义方向的顺序，上右下左，要注意这里的x和y的值，跟坐标轴是反的。
	const dirct = [[-1, 0], [0, 1], [1, 0], [0, -1]];
	// 获取最大X值和最大Y值
	const lenX = board.length;
	const lenY = board[0] ?  board[0].length : 0;
	// 初始化一个二维数组，用来记录后续使用的元素
	let visited = new Array(board.length);
	for (let d = 0; d < board.length; d ++) {
		visited[d] = [];
	}
	// 辅助函数，用来判断当前的坐标是否超出二维网格范围
	const inArea = (x, y) => {
		return 0 <= x && x < lenX && 0 <= y && y < lenY;
	};
  // 递归主函数,传入当前需要判断的word序号，以及当前递归的二维网格节点位置
	const searchWord = (index, startX, startY) => {
		// 如果当前节点跟需要判断的word节点不相等，直接返回
		if (board[startX][startY] !== word[index]) return false;
		// 如果当前递归的长度等于word节点长度，说明已经找到相应单词，返回true。
		if (index === word.length - 1) return true;
		// 记录当前使用的元素
		visited[startX][startY] = true;
		// 向四个方向进行递归
		for (let i = 0; i < dirct.length; i ++) {
			const newX = startX + dirct[i][0];
			const newY = startY + dirct[i][1];
			// 判断新节点是否存在二维网格，以及判断新节点是否被使用过
			if (inArea(newX, newY) && !visited[newX][newY]) {
				// 继续递归
				if (searchWord(index + 1, newX, newY)) return true;
			}
		}
		// 回溯当前使用的元素
		visited[startX][startY] = false;
	};
  // 双重循环，遍历二维网格中的所有节点
	for (let i = 0; i < board.length; i ++) {
		for (let j = 0; j < board[i].length; j ++) {
			// 调用递归主函数
			if (searchWord(0, i, j)) return true;
		}
	}
	return false;
}; 

const bb = 
 [
 ['A','B','C','E'],
 ['S','F','C','S'],
 ['A','D','E','E']
 ];

console.log(exist(bb, "ABCCED"));
