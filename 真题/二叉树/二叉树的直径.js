/**
 * leetcode 543. 二叉树的直径
 * 
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。
 * 这条路径可能穿过也可能不穿过根结点。
 * 
 * 输入：   1
 *        / \
 *       2   3
 *      / \     
 *     4   5    
 * 输出：返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
 * 
 */
// 还是查找二叉树深度的题目，但是需要注意，不需要再次遍历所有节点
// 在查找二叉树深度的时候，就会对左右所有的节点进行遍历，在遍历过程中，就可以计算出最大的直径
var diameterOfBinaryTree = function(root) {
  if (!root) return 0;
  let max = 0;
  const getMax = (root) => {
    if (!root) return 0;
    const left = getMax(root.left) + 1;
    const right = getMax(root.right) + 1;
    // 在查找二叉树最大深度的遍历过程中，计算最大的直径
    max = Math.max(max, left + right - 2);
    return Math.max(left, right);
  };
  getMax(root);
  return max;
};