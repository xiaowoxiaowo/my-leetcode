/***
 * leetcode 110
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 
 * 本题中，一棵高度平衡二叉树定义为：
 * 		一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
 * 
 * 
 * 例1：
 * 输入: root = [3,9,20,null,null,15,7]
 * 输出: true
 * 
 * 输入: root = [1,2,2,3,3,null,null,4,4]
 * 输出: false
 * 
 * 输入: root = []
 * 输出: true
 * 
 * 
 * 解题思路：
 *  深度优先遍历思路，查找 二叉树深度 的改版，从底向上计算每颗子树的高度。如果中间有绝对值大于1的两颗树，直接返回false
 */

var isBalanced = function(root) {
  if (!root) return true;
  const loop = (node) => {
    // 初始为1，与false区分开来
    if (!node) return 1;
    let left = loop(node.left);
    let right = loop(node.right);
    // 如果left或right有false，或当前left和right的差值大于1.返回false
    // 不然就正常返回对应子树的最大深度
    if (left && right && Math.abs(left - right) <= 1) {
      return Math.max(left, right) + 1;
    } else {
      return false;
    }
  }
  return !!loop(root);
};