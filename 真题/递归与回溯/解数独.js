/***
 * leetcode 37
 * 编写一个程序，通过填充空格来解决数独问题。
 * 
 * 一个数独的解法需遵循如下规则：
 *  数字 1-9 在每一行只能出现一次。
 *  数字 1-9 在每一列只能出现一次。
 *  数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * 空白格用 '.' 表示。
 * 
 * 说明：
 * 给定的数独序列只包含数字 1-9 和字符 '.' 。
 * 你可以假设给定的数独只有唯一解。
 * 给定数独永远是 9x9 形式的。
 * 
 * 输入格式：
 * [
 * ["5","3",".",".","7",".",".",".","."],
 * ["6",".",".","1","9","5",".",".","."],
 * [".","9","8",".",".",".",".","6","."],
 * ["8",".",".",".","6",".",".",".","3"],
 * ["4",".",".","8",".","3",".",".","1"],
 * ["7",".",".",".","2",".",".",".","6"],
 * [".","6",".",".",".",".","2","8","."],
 * [".",".",".","4","1","9",".",".","5"],
 * [".",".",".",".","8",".",".","7","9"]
 * ]
 * 
 * 解题思路：
 * 通过定义三个数组来记录，每一行，每一行，每一个3X3里已经被使用过的参数，用来作为递归的限制条件。
 * 这里递归的思路也跟一般的不一样，每次还是递归一行的数据。当递归完一行之后，继续递归下一行
 */
var solveSudoku = function(board) {
	// 定义三个数组来记录，每一行，每一行，每一个3X3里已经被使用过的参数
  let lineX = [];
  let lineY = [];
  let area3x3 = [];
  for (let n = 0; n < 9; n ++) {
    lineX[n] = {};
    lineY[n] = {};
    if (((n + 1) % 3) === 0) {
      const curIndex = (n + 1) / 3;
      area3x3[curIndex - 1] = [{}, {}, {}];
    } 
	}
	// 用来增加（删除）记录
  const toggleCache = (i, j, val, type) => {
    const flag = (type === 'add' ? true : false);
    lineX[i][val] = flag;
    lineY[j][val] = flag;
    area3x3[Math.floor(i / 3)][Math.floor(j / 3)][val] = flag;
	};
	// 判断当前数据是否在当前行，列，3x3中存在
  const hasCache = (i, j, val) => {
    if(lineX[i][val]) return true;
    if(lineY[j][val]) return true;
    if(area3x3[Math.floor(i / 3)][Math.floor(j / 3)][val]) return true;
    return false;
	};
	// 初始化，将初始数据传入记录中
  for (let i = 0; i < 9; i ++) {
    for (let j = 0; j < 9; j ++) {
      const val = board[i][j];
      if (val !== '.') toggleCache(i, j, val, 'add');
    }
  }
	// 递归方法
  const dfs = (xIndex, yIndex) => {
		// 当x轴递归到9时，结束递归。
		// 因为本题都只有唯一解，所以需要return一个true，用来计算出值之后，提前退出
		if (xIndex === 9) return true;
		// 当y轴递归到9时，将x加1，继续下一行的递归
    if (yIndex === 9) return dfs(xIndex + 1, 0);
    if (board[xIndex][yIndex] === '.') {
			// 如果当前没有值，遍历1-9
      for (let v = 1; v <= 9; v ++) {
				// 判断遍历的v是否满足同一行，同一列，3x3都没有被使用过
        if (!hasCache(xIndex, yIndex, String(v))) {
					// 递归
					board[xIndex][yIndex] = String(v);
					toggleCache(xIndex, yIndex, v, 'add');
					if (dfs(xIndex, yIndex + 1)) return true;
					// 回溯
					board[xIndex][yIndex] = '.';
					toggleCache(xIndex, yIndex, v, 'remove');
        }
      }
    } else {
			// 如果当有初始值，跳到下一个节点
      return dfs(xIndex, yIndex + 1);
    }
  };

  dfs(0, 0);
  return board;
};

const test = [
["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]
];

console.log(solveSudoku(test));
