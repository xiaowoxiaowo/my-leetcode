/***
 * leetcode 95. 不同的二叉搜索树 II
 * 
 * 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。
 * 
 * 
 * 输入：n = 3
 * 输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
 *   1       1        2        3    3                  
 *    \       \      / \      /    /                  
 *     3       2    1   3    2    1                    
 *    /         \           /      \
 *   2           3         1        2
 *  
 * 输入：n = 1
 * 输出：[[1]]
 * 
 * 
 */
// 遍历所有答案，肯定是用递归思路了，使用dfs来进行二叉树的递归
// 思路类似第96题，遍历[1...n]这些节点，分别把这些点作为二叉树的根节点，然后再递归当前节点的左侧以及右侧节点
// 二叉树的递归，一般需要把结果存储在递归过程中，在递归完成之后才能return出来
const generateTrees = (n) => {
  if (n === 0) return [];
  // 缓存对象，实现记忆化递归
  const cache = {};
  const dfs = (left, right) => {
    // 两个递归的终止条件
    if (left > right) return [null];
    if (left === right) return [new TreeNode(left)];
    const res = [];
    // 遍历[1...n]的所有节点
    for (let i = left; i <= right; i ++) {
      // 如果有缓存，直接从缓存当中获取
      const leftStr = `${left}-${i - 1}`;
      const rightStr = `${i + 1}-${right}`;
      if (!cache[leftStr]) {
        cache[leftStr] = dfs(left, i - 1);
      }
      if (!cache[rightStr]) {
        cache[rightStr] = dfs(i + 1, right);
      }
      // 得到左右两边的树的数组
      const leftTrees = cache[leftStr];
      const rightTrees = cache[rightStr];
      // 两重循环，得到左右两边的数组项中的所有组合
      for (const leftTree of leftTrees) {
        for (const rightTree of rightTrees) {
          // 把左右的树以及根节点组成一棵树，推入结果数组中
          const tree = new TreeNode(i);
          tree.left = leftTree;
          tree.right = rightTree;
          res.push(tree);
        }
      }
    }
    // 返回结果
    return res;
  };
  return dfs(1, n);
};
