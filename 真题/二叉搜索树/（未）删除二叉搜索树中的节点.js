/***
 * leetcode 450
 * 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。
 * 返回二叉搜索树（有可能被更新）的根节点的引用。
 * 
 * 一般来说，删除节点可分为两个步骤：
 * 1.首先找到需要删除的节点；
 * 2.如果找到了，删除它。
 * 
 * 要求算法时间复杂度为 O(h)，h 为树的高度。
 * 
 * 
 * 例1：
 * 输入: root = [5,3,6,2,4,null,7] key = 3
 * 
 *                    5
 *                  /   \
 *                 3     6
 *                / \     \
 *               2   4     7
 * 
 * 输出：一个正确答案是[5,4,6,2,null,null,7]
 * 
 *                    5
 *                  /   \
 *                 4     6
 *                /       \
 *               2         7
 * 
 * 另一个正确答案是[5,2,6,null,4,null,7]
 * 
 *                    5
 *                  /   \
 *                 2     6
 *                  \     \
 *                   4     7
 * 
 * 解题思路：
 */

var findNode = function(root, key) {
  if (!root) return [];
  if (root.val === key) return [root];
  let left = findNode(root.left, key);
  let right = findNode(root.right, key);
  if (left) return [left, root, 'l'];
  if (right) return [right, root, 'r'];
  return [];
}

var deleteNode = function(root, key) {
  let [tarNode, parNode, direct] = findNode(root, key);
  if (!tarNode) return root;
  if (!tarNode.left && !tarNode.right) {
    if (parNode) {
      parNode[direct] = null;
      return root;
    } else {
      return null;
    }
  } 
  const loop = (node) => {
    if (!node) return null;
    if (!node.right) {
      // Object.assign(target, target.left);
      const { val, left, right } = node.left;
      node.val = val;
      node.left = left;
      node.right = right;
      return node;
    } else {
      const { val, right } = node.right;
      node.val = val;
      node.right = loop(right);
    }
  }
  loop(tarNode);
  return root;
};