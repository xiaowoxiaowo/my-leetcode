/***
 * leetcode 111
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
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
 * 输出: 2
 * 
 * 输入：[2,null,3,null,4,null,5,null,6]
 *    2
 *     \
 *      3
 *       \
 *        4
 *         \
 *          5
 *           \
 *            6  
 * 输出: 5
 * 
 * 
 * 解题思路：
 * 跟 二叉树的最大深度 思路类似，使用递归的方式，改成取最小值。
 * 
 * 不过这里需要注意一点，如果一个节点下面只有左节点或右节点，需要去计算那个存在的节点树的深度。
 * 如果按照 二叉树的最大深度 的方式来，那个不存在的节点为0，会影响本题中 最小深度 的计算，所以需要判断
 * 两个子节点是否都存在，如果只有一个存在，取这个存在的节点的值。
 */
var minDepth = function(root) {
  // 递归终止条件
  if (!root) return 0;
  // 遍历左右子节点树
  let leftMinDepth = minDepth(root.left);
  let rightMinDepth = minDepth(root.right);
  // 判断两个子节点是否都存在
  if (!leftMinDepth !== !rightMinDepth) {
    // 如果有一个不存在，取那个存在的节点的深度
    return (leftMinDepth || rightMinDepth) + 1;
  } else {
    // 如果都存在，取较小的子节点深度
    return Math.min(leftMinDepth, rightMinDepth) + 1;
  }
};