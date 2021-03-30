/***
 * leetcode 98
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 * 
 * [5,1,4,null,null,3,6]
 * 
 * 解题思路：
 * 需要根据二叉搜索树的特性来判断
 */

// 中序遍历比较法
// 对于二叉搜索树来说，它的中序遍历出来的数据是一个从小到大的数组
var isValidBST = function(root) {
  if (!root) return false;
  let stack = [], val = false;
  stack.push({ type: 'go', node: root });
  while (stack.length) {
    let { type, node } = stack.pop();
    if (!node) continue;
    if (type === 'printf') {
      // 判断每次遍历出来的数据，是不是都是递增的
      if (val === false) val = node.val - 1;
      if (val >= node.val) return false;
      val = node.val;
    } else {
      stack.push({ type: 'go', node: node.right });
      stack.push({ type: 'printf', node: node });
      stack.push({ type: 'go', node: node.left });
    }
  }
  return true;
};


// 递归方法
// 根据二叉搜索树的根节点，比它左侧子树所有值都大，比它右侧子树所有值都小的特性
// 每次遍历都给一个节点传入允许的最大值，最小值，递归判断。
const helper = (root, lower, upper) => {
  if (!root) return true;
  if (root.val <= lower || root.val >= upper) return false;
  // 这里的逻辑有点绕，只要这样想，
  // 当判断左节点时，最小值不需要变，最大值需要变化成当前节点值
  // 当判断右节点时，最大值不需要变，最小值需要变化成当前节点值
  return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}
var isValidBST = function(root) {
  return helper(root, -Infinity, Infinity);
};
