/***
 * leetcode 114. 二叉树展开为链表
 * 
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表
 *  - 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
 *  - 展开后的单链表应该与二叉树 先序遍历 顺序相同。
 * 
 * 
 * 输入：root = [1,2,5,3,4,null,6]
 * 输出：[1,null,2,null,3,null,4,null,5,null,6]
 *         1          1
 *       /   \         \          
 *      2     5         2        
 *     / \     \         \
 *    3   4     6         3
 *                         \
 *                          4
 *                           \
 *                            5
 *                             \
 *                              6
 * 输入：root = []
 * 输出：[]
 * 
 * 输入：root = [0]
 * 输出：[0]
 * 
 */
// 最简单的办法，先前序遍历一遍，然后一个个添加
var flatten = function(root) {
  if (!root) return root;
  if (!root.left && !root.right) return root;
  const res = [];
  const loop = (node) => {
    res.push(node);
    if (node.left) loop(node.left);
    if (node.right) loop(node.right);
  }
  loop(root);
  let cur = root;
  for (let i = 1; i < res.length; i ++) {
    cur.right = res[i];
    cur.left = null;
    cur = cur.right;
  }
  return root;
};

// 遍历所有的右侧节点，如果当前节点存在左节点，找到该节点的最右侧节点
// 将该最右侧节点的右侧节点赋值为当前节点的右侧节点，然后将当前节点的右节点赋值为该左侧节点
var flatten = function(root) {
  while(root) {
    let left = root.left;
    // 判断当前节点的左节点是否存在
    if (left) {
      // 寻找以左节点为根节点的最右侧节点
      while (left.right) left = left.right;
      // 将最右侧节点的右侧节点赋值为当前节点的右节点
      left.right = root.right;
      // 将当前节点的右节点赋值为左节点（即为当前节点的左节点）
      root.right = root.left;
      root.left = null;
    }
    root = root.right;
  }
  return root;
};