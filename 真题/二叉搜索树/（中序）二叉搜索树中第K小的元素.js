/***
 * leetcode 230
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。
 * 
 * 
 * 例1：
 * 输入: root = [3,1,4,null,2], k = 1
 * 输出：1
 * 
 * 例2：
 * 输入: root = [5,3,6,2,4,null,null,1], k = 3
 * 输出：3
 * 
 * 进阶：如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化算法？
 * 
 * 解题思路：
 */

var kthSmallest = function(root, k) {
  if (!root) return -1;
  let stack = [], count = 1;
  stack.push({ type: 'node', node: root });
  while(stack.length) {
    let { type, node } = stack.pop();
    if (!node) continue;
    if (type === 'res' && count++ === k) return node.val;
    if (type === 'node') {
      stack.push({ type: 'node', node: node.right });
      stack.push({ type: 'res', node: node });
      stack.push({ type: 'node', node: node.left });
    }
  }
  return -1;
};

// 递归思路直接实现
var kthSmallest = function(root, k) {
  if (!root) return -1;
  let n = 1;
  const loop = (node) => {
    if (!node) return;
    const left = loop(node.left);
    if (left !== undefined) return left;
    if (n++ === k) return node.val;
    const right = loop(node.right);
    if (right !== undefined) return right;
  };
  return loop(root);
}