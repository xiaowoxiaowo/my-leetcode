/***
 * leetcode 101
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 
 * 例1：
 * 输入: [1,2,2,3,4,4,3]
 * 输出: true
 * 
 * 输入: [1,2,2,null,3,null,3]
 * 输出: false
 * 
 * 
 * 解题思路：
 * 递归的思路，重点在于哪两个节点去比较，因为需要检查是否是镜像对称，所以需要从最边侧向内两两比较。
 */

var isSymmetric = function(root) {
  if (!root) return true;
  const loop = (left, right) => {
    // 如果这两个对称的子节点都不存在，符合镜像对称
    if (!left && !right) return true;
    // 如果这两个对称的子节点都存在
    if (left && right) {
      // 首先需要这两个子节点的值一样
      // 然后继续递归这两个子节点下面的对称子节点
      // left.left和right.right
      // left.right和right.left
      return left.val === right.val && loop(left.left, right.right) && loop(left.right, right.left);
    }
    return false;
  };
  // 递归对称的子节点
  return loop(root.left, root.right);
};