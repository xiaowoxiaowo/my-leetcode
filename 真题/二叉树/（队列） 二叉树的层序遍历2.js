/***
 * leetcode 107
 * 给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
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
 * 输出: 
 * [
 * [15,7],
 * [9,20],
 * [3]
 * ]
 * 
 * 
 * 解题思路：
 * 
 * 跟 二叉树的层序遍历 方法一样使用队列以及广度优先遍历的思路，只需要改变最后存数据的时顺序即可
 */

var levelOrderBottom = function(root) {
  let queue = [], res = [];
  if (!root) return res;

  queue.push({ level: 0, node: root });
  while(queue.length) {
    let { level, node } = queue.shift();
    if (node.left) queue.push({ level: level + 1, node: node.left });
    if (node.right) queue.push({ level: level + 1, node: node.right });

    if (res.length === level) {
      res.unshift([node.val]);
    } else {
      res[0].push(node.val);
    }
  }
  return res;
};
