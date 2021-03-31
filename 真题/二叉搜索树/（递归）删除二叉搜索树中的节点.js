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
 * 需要做两件事情，一个是找到相应的节点，一个是执行删除操作。
 * 找节点可以通过二叉搜索树的特性，大于（小于）根节点的值，继续从根节点的右（左）子树中遍历查找。
 * 删除操作有几种情况：
 * 1.叶子节点，直接设为null
 * 2.如果只有左节点或者右节点，直接赋值
 * 3.如果左右节点都存在，需要获取该节点的前驱或者后继节点。本例使用前驱节点，赋值之后，还需要使用递归删除前驱节点
 */

var deleteNode = function(root, key) {
  if (!root) return root;
  // 如果key大于根节点，在右侧去递归
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  // 如果key小于根节点，在左侧去递归
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    // 叶子节点
    if (!root.left && !root.right) return null;
    // 只有左侧节点
    if (!root.right) return root.left;
    // 只有右侧节点
    if (!root.left) return root.right;
    // 获取前驱节点
    let last = root.left;
    while(last.right) last = last.right;
    // 赋值
    root.val = last.val;
    // 调用自身，删除前驱节点
    root.left = deleteNode(root.left, last.val);
  }
  return root;
};






















const deleteNode = function (root, key) {
  if (root == null) return root

  if (root.val > key) {
    // 往左子树找
    root.left = deleteNode(root.left, key)
  } else if (root.val < key) {
    // 往右子树找
    root.right = deleteNode(root.right, key)
  } else {
    // 找到了
    if (!root.left && !root.right) {
      // 待删除的节点左右子树均为空。证明是叶子节点，直接删除即可
      root = null
    } else if (root.left && !root.right) {
      // 待删除的节点右子树为空，让待删除节点的左子树替代自己。
      root = root.left
    } else if (!root.left && root.right) {
      // 待删除的节点左子树为空，让待删除节点的右子树替代自己。
      root = root.right
    } else if (root.left && root.right) {
      // 如果待删除的节点的左右子树都不为空。我们需要找到比当前节点小的最大节点（前驱）来替换自己
      let last = root.left
      while (last.right) {
        last = last.left
      }
      // 最终的last就是比当前节点小的最大节点，将值进行替换
      root.val = last.val
      // 删除该最大节点
      root.left = deleteNode(root.left, last.val)
    }
  }
  return root
}