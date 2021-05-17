/***
 * leetcode 404
 * 计算给定二叉树的所有左叶子之和。
 * 
 * 
 * 例1：
 * 输入: [3,9,20,null,null,15,7],
 * 
 *       3
 *      / \
 *     9   20
 *        /  \
 *       15   7
 * 
 * 输出: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 * 
 * 
 * 解题思路：
 * 递归的思路，重点在于如何判断是左叶子节点。
 */

// var sumOfLeftLeaves = function(root) {
//   if (!root) return 0;
//   let res = 0;
//   // 重点在这句，判断当前节点的左子节点是否是叶子节点，如果是，把值加到res中
//   if (root.left && !root.left.left && !root.left.right) res = root.left.val;
//   // 继续递归左右下级子节点
//   let leftNum = sumOfLeftLeaves(root.left);
//   let rightNum = sumOfLeftLeaves(root.right);
//   // 把值返回上层
//   return res + leftNum + rightNum;
// };

// 重新实现的更好理解的递归
var sumOfLeftLeaves = function(root) {
  if (!root) return 0;
  let sum = 0;
  const loop = (node, type) => {
    if (!node) return;
    if (!node.left && !node.right && type === 'l') return sum += node.val;
    if (node.left) loop(node.left, 'l');
    if (node.right) loop(node.right, 'r');
  };
  loop(root, 'r');
  return sum;
}
