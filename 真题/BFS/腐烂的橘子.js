/**
 * leetcode 994
 * 在给定的网格中，每个单元格可以有以下三个值之一：
 * 
 * 值 0 代表空单元格；
 * 值 1 代表新鲜橘子；
 * 值 2 代表腐烂的橘子。
 * 
 * 每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。
 * 返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。
 * 
 * 输入：[[2,1,1],
 *       [1,1,0],
 *       [0,1,1]]
 * 输出：4
 * 
 * 输入：[[2,1,1],
 *       [0,1,1],
 *       [1,0,1]]
 * 输出：-1
 * 解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个正向上。
 * 
 * 输入：[[0,2]]
 * 输出：0
 * 解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。
 * 
 */

// 类似bfs的思路，首先去遍历一次这个二维数组，记录所有的为2的节点（腐烂），并计算所有为1（新鲜）的节点有多少个
// 然后遍历这些腐烂节点，从上下左右四个方向去扩散，记录这些扩散的节点（这里要注意，扩散节点必须处于初始数组中而且初始必须是新鲜的，为1的节点）
// 每次扩散一个新鲜节点，就把新鲜节点的个数减1，直到个数为0。如果两个遍历新鲜节点个数不变，说明存在永远不会腐烂的节点，返回-1,。
var orangesRotting = function(grid) {
  const xLen = grid.length;
  const yLen = grid[0].length;
  // 定义四个扩散的方向
  let dirct = [[-1, 0], [1, 0], [0, 1], [0, -1]];
  // 判断扩散后的节点是否存在于二维数组中
  const inArea = (x, y) => {
    return x >=0 && x < xLen && y >= 0 && y < yLen;
  };
  // 记录新的腐烂节点
  let rotList = [];
  // 新鲜节点的剩余个数
  let remainNum = 0;
  // 初始化，获取所有腐烂节点，记录新鲜节点的个数
  for (let i = 0; i < xLen; i ++) {
    for (let j = 0; j < yLen; j ++) {
      if (grid[i][j] === 2) rotList.push([i, j]);
      if (grid[i][j] === 1) remainNum++;
    }
  }
  // 如果一开始就不存在新鲜节点，直接返回0
  if (!remainNum) return 0;
  // 遍历的分钟数
  let times = 0;
  while(true) {
    // 记录最新的被腐烂节点
    let curRotList = [];
    // 记录上次遍历的剩余新鲜节点数
    let preNum = remainNum;
    // 遍历腐烂节点，向每个节点的上下左右四个方向扩散
    for (let i = 0; i < rotList.length; i ++) {
      for (let j = 0; j < dirct.length; j ++) {
        const newX = rotList[i][0] + dirct[j][0];
        const newY = rotList[i][1] + dirct[j][1];
        // 判断是否处于二维数组中，而且为新鲜节点
        if (inArea(newX, newY) && grid[newX][newY] === 1) {
          // 记录节点
          curRotList.push([newX, newY]);
          // 被腐烂
          grid[newX][newY] = 2;
          // 新鲜节点个数减1
          remainNum--;
        }
      }
    }
    // 分钟数加1
    times++;
    // 更新为新的腐烂节点列表
    rotList = curRotList;
    // 如果新鲜节点为0，返回分钟数
    if (!remainNum) return times;
    // 如果 上次遍历的剩余新鲜节点数 跟 当前遍历之后的剩余新鲜节点数 一致，而且还有剩余新鲜节点
    // 说明存在永远不会腐烂的节点
    if (preNum === remainNum) return -1;
  }
};

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]]));
console.log(orangesRotting([[0,2]]));