/***
 * leetcode 100
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * 
 * 例1：
 * 输入: p = [1,2,3], q = [1,2,3]
 * 输出: true
 * 
 * 输入: p = [1,2], q = [1,null,2]
 * 输出: false
 * 
 * 输入：p = [1,2,1], q = [1,1,2]
 * 输出：false
 * 
 * 输入：p = [10,5,15], q = [10,5,null,null,15]
 * 输出：false
 * 
 * 解题思路：
 * 深度优先遍历 思路，对两颗树同时从顶向下遍历，保持两棵树同样节点的比较。
 * 当有节点不一致时，直接中断，返回false，不需要再向下遍历。
 */
var isSameTree = function(p, q) {
  // 都没有子节点的情况
  if (p === null && q === null) return true;
  // 如果有一个节点为null，另一个存在的情况
  if (p === null || q == null) return false;
  // 两个节点值不一致
  if (p.val !== q.val) return false;
  // 遍历左右子节点，当左右都一致时，返回true，不然返回false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
