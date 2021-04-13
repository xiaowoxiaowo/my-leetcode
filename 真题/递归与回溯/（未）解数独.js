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
 * 
 */
// var solveSudoku = function(board) {
//   let lineX = [];
//   let lineY = [];
//   let area3x3 = [];
//   for (let n = 0; n < 9; n ++) {
//     lineX[n] = {};
//     lineY[n] = {};
//     if (((n + 1) % 3) === 0) {
//       const curIndex = (n + 1) / 3;
//       area3x3[curIndex - 1] = [{}, {}, {}];
//     } 
//   }
//   const toggleCache = (i, j, val, type) => {
//     const flag = (type === 'add' ? true : false);
//     lineX[i][val] = flag;
//     lineY[j][val] = flag;
//     area3x3[Math.floor(i / 3)][Math.floor(j / 3)][val] = flag;
//   };
//   const hasCache = (i, j, val) => {
//     if(lineX[i][val]) return true;
//     if(lineY[j][val]) return true;
//     if(area3x3[Math.floor(i / 3)][Math.floor(j / 3)][val]) return true;
//     return false;
//   };
//   for (let i = 0; i < 9; i ++) {
//     for (let j = 0; j < 9; j ++) {
//       const val = board[i][j];
//       if (val !== '.') toggleCache(i, j, val, 'add');
//     }
//   }
//   let res = [];
//   const dfs = (xIndex, start, arr) => {
//     const newArr = JSON.parse(JSON.stringify(arr));
//     if (xIndex === 9) return res.push(newArr);
//     const val = board[xIndex][start];
//     if (start === 9) return dfs(xIndex + 1, 0, arr);
//     if (val === '.') {
//       for (let v = 1; v <= 9; v ++) {
//         if (!hasCache(xIndex, start, v)) {
//           toggleCache(xIndex, start, v, 'add');
//           newArr[xIndex][start] = String(v);
//           dfs(xIndex, start + 1, newArr);
//           toggleCache(xIndex, start, v, 'remove');
//         }
//       }
//     } else {
//       newArr[xIndex][start] = String(val);
//       dfs(xIndex, start + 1, newArr);
//     }
//   };
//   dfs(0, 0, [[], [], [], [], [], [], [], [], []]);
//   for (let i = 0; i < 9; i ++) {
//     for (let j = 0; j < 9; j ++) {
//       board[i][j] = res[0][i][j];
//     }
//   }
//   return board;
// };

const solveSudoku = (board) => {
  const isClash = (x, y, val) => {
    for (let i = 0; i < 9; i++) {
      if (board[i][y] === val || board[x][i] === val) return true;
    }
    const areaX = Math.floor(x / 3) * 3;
    const areaY = Math.floor(y / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[areaX + i][areaY + j] === val) return true;
      }
    }
    return false; 
  };

  const dfs = (xIndex, yIndex) => {
    if (xIndex === 9) return true;
    if (yIndex === 9) return dfs(xIndex + 1, 0);
    if (board[xIndex][yIndex] === '.') {
      for (let v = 1; v <= 9; v ++) {
        if (!isClash(xIndex, yIndex, String(v))) {
          board[xIndex][yIndex] = String(v);
          if (dfs(xIndex, yIndex + 1)) return true;
          board[xIndex][yIndex] = '.';
        }
      }
    } else {
      return dfs(xIndex, yIndex + 1);
    }
  };

  dfs(0, 0);
  return board;
};


const solveSudoku = (board) => {
  const rows = new Array(9);    // 存放每一行对应的可选数集
  const cols = new Array(9);    // 存放每一列对应的可选数集
  const blocks = new Array(9);  // 存放每一框对应的可选数集
  const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; 
  for (let i = 0; i < 9; i++) { // 集合的初始化
    rows[i] = new Set(options);
    cols[i] = new Set(options);
    blocks[i] = new Set(options);
  }

  const getBlockIndex = (i, j) => { // 根据坐标，获取所在的小框的索引
    return (i / 3 | 0) * 3 + j / 3 | 0;  // |0 是向下取整
  };

  for (let i = 0; i < 9; i++) {    // 根据现有的已填的数字，更新set们
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != ".") {
        rows[i].delete(board[i][j]); // 当前行出现过这个数字，这个数字就不能在这一行出现，删除该选项
        cols[j].delete(board[i][j]);
        blocks[getBlockIndex(i, j)].delete(board[i][j]);
      }
    }
  }

  const fill = (i, j) => {
    if (j == 9) {     // 列越界，就填下一行
      i++;
      j = 0;
      if (i == 9) return true;  // 都填完了 返回true
    }
    if (board[i][j] != ".") return fill(i, j + 1); // 如果不是空白格，递归填下一格

    const blockIndex = getBlockIndex(i, j); // 获取所在小框的索引

    for (let num = 1; num <= 9; num++) {    // 枚举出所有选择：1-9
      const s = String(num);
      // 当前选择必须在三个set中都存在，如果有一个不存在，就说明发生了冲突，跳过该选择
      if (!rows[i].has(s) || !cols[j].has(s) || !blocks[blockIndex].has(s)) continue;

      board[i][j] = s;    // 作出选择
      rows[i].delete(s);  // 更新set们，删掉这个可填选项
      cols[j].delete(s);
      blocks[blockIndex].delete(s);

      if (fill(i, j + 1)) return true; // 如果基于当前选择，填下一个，最后可解出数独，直接返回真
      // 基于当前选择，填下一个，怎么填都不行，回溯，恢复为空白格
      board[i][j] = ".";
      rows[i].add(s);     // set们，将之前删掉的当前数字，加回来
      cols[j].add(s);
      blocks[blockIndex].add(s);
    }
    return false;  // 尝试了1-9，每个都往下递归，都不能做完，返回false
  };

  fill(0, 0);  // 填格子的起点
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
