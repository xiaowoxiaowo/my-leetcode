/***
 * leetcode 199
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * 
 * 例1：
 * 输入: [1,2,3,null,5,null,4]
 * 
 *       1        <--
 *      / \
 *     2   3      <--
 *      \   \
 *       5   4    <--
 * 输出: 
 * [1, 3, 4]
 * 
 * 
 * 解题思路：
 * 队列实现BFS，每一层都从右侧开始遍历，第一个存在的值，即为右侧所能看到的节点值。
 */

var rightSideView = function(root) {
  if (!root) return [];
  let queue = [], res = [root.val], curLevel = 0;
  queue.push({ level: 0, node: root });
  // 队列实现BFS
  while (queue.length) {
    let { level, node } = queue.shift();
    // 从右侧开始进行遍历
    if (node.right) queue.push({ level: level + 1, node: node.right });
    if (node.left) queue.push({ level: level + 1, node: node.left });

    // 取第一个存在的值
    if (curLevel < level) {
      // 推入结果数组
      res.push(node.val);
      // 重置层级标志位
      curLevel = level;
    }
  }
  return res;
};