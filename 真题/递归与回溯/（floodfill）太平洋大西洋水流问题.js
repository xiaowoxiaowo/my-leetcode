/***
 * leetcode 417
 * 给定一个 m x n 的非负整数矩阵来表示一片大陆上各个单元格的高度。
 * “太平洋”处于大陆的左边界和上边界，而“大西洋”处于大陆的右边界和下边界。
 * 
 * 规定水流只能按照上、下、左、右四个方向流动，且只能从高到低或者在同等高度上流动。
 * 
 * 请找出那些水流既可以流动到“太平洋”，又能流动到“大西洋”的陆地单元的坐标。
 * 
 * 例1：      
 * 输入：
 * 
 * 太平洋 ~   ~   ~   ~   ~ 
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * 大西洋
					
 * 输出：[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (上图中带括号的单元).
 * 
 * 提示：
 * 输出坐标的顺序随意
 * 
 * 解题思路：
 * 两次循环dfs，寻找共有的节点。
 * 遍历左边界以及上边界的节点，递归找到所有大于等于前一个节点值的节点。将这些点记录到一个二维数组中。
 * 然后遍历右边界以及下边界的节点，一样递归寻找所有大于等于前一个节点值的节点。并查询之前的二维数组。
 * 如果已经存在，说明是两个边界都能递归到的节点，符合条件，推入res结果数组中。最后返回结果
 */
var pacificAtlantic = function(heights) {
  const lenX = heights.length;
  if (lenX === 0) return [];
  const lenY = heights[0].length;
  if (lenY === 0) return [];
  const inArea = (x, y) => 0 <= x && x < lenX && 0 <= y && y < lenY;
  const dirct = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  // visited是用来记录访问过的节点，避免重复递归同一个节点
  // bak用来记录两个边界中符合条件的节点
  let visited = [], bak = [], res = [];
  for (let i = 0; i < lenX; i ++) {
    visited.push([]);
    bak.push([]);
  }
  const dfs = (startX, startY, flag) => {
    // 如果该节点已经被访问过，直接return
    if (visited[startX][startY]) return;
    // 右，下边界情况，如果存在于bak中，推入res
    if (flag && bak[startX][startY]) res.push([startX, startY]);
    let pre = heights[startX][startY];
    visited[startX][startY] = true;
    if(!flag) bak[startX][startY] = true;
    for (let i = 0; i < dirct.length; i ++) {
      const newX = startX + dirct[i][0];
      const newY = startY + dirct[i][1];
      // 下一个节点必须在heights数组中，而且值必须大于等于当前节点
      if (inArea(newX, newY) && heights[newX][newY] >= pre) {
        dfs(newX, newY, flag);
      }
    }
  };
  // 遍历上边界节点，把符合要求的值存入bak
  for (let i = 0; i < lenY; i ++) {
    dfs(0, i);
  }
  // 遍历左边界节点，把符合要求的值存入bak
  for (let i = 1; i < lenX; i ++) {
    dfs(i, 0);
  }
  // 重置缓存对象
  for (let i = 0; i < lenX; i ++) {
    visited[i] = [];
  }
  // 遍历右边界节点，如果符合要求的值存在于bak中，推入res
  for (let i = 0; i < lenY; i ++) {
    dfs(lenX - 1, i, true);
  }
  // 遍历下边界节点，如果符合要求的值存在于bak中，推入res
  for (let i = 0; i < lenX - 1; i ++) {
    dfs(i, lenY - 1, true);
  }
  return res;
};

const test = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];
console.log(pacificAtlantic(test));