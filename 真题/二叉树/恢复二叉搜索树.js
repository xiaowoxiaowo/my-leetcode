/***
 * leetcode 99. 恢复二叉搜索树
 * 
 * 给你二叉搜索树的根节点 root ，该树中的两个节点被错误地交换。请在不改变其结构的情况下，恢复这棵树。
 * 
 * 进阶：使用 O(n) 空间复杂度的解法很容易实现。你能想出一个只使用常数空间的解决方案吗？
 * 
 * 输入：root = [1,3,null,null,2]
 * 输出：[3,1,null,null,2]
 * 解释：3 不能是 1 左孩子，因为 3 > 1 。交换 1 和 3 使二叉搜索树有效。
 *        1               3
 *       /               /
 *      3        =>     1 
 *       \               \
 *         2               2 
 * 
 * 输入：root = [3,1,4,null,null,2]
 * 输出：[2,1,4,null,null,3]
 * 解释：2 不能在 3 的右子树中，因为 2 < 3 。交换 2 和 3 使二叉搜索树有效。
 *          3             2  
 *         / \           / \
 *        1   4   =>    1   4
 *            /            /
 *           2            3  
 */
// 中序遍历，然后在递归栈中进行比较，时间复杂度为O(n),空间复杂度为O(h),h为递归栈的深度
// 假如遍历出的内容正确内容为3->5->8->10->13
// 错误的情况有两种3->10->8->5->13，5->3->8->10->13
// 用prev记录上一个递归的节点，只要prev的值大于下一个递归节点值，说明存在错误节点
// 用err1和err2记录两个错误节点
var recoverTree = function(root) {
  let prev = new TreeNode(-Infinity);
  let err1 = err2 = null;
  // 中序遍历
  const loop = (node) => {
    if (!node) return;
    if(node.left) loop(node.left);
    // 当prev的值大于下一个递归节点值，第一个错误节点出现，把err1赋值为prev
    if (err1 === null && prev.val >= node.val) err1 = prev;
    // 当prev的值大于下一个递归节点值，第二个错误节点出现，把err1赋值为node
    // 注意:当第一个节点出现，其实第二个节点也是符合要求，也是会赋值的
    // 所以后续不能停止递归，需要等待第二个错误节点出现
    if (err1 !== null && prev.val >= node.val) err2 = node;
    prev = node;
    if(node.right) loop(node.right);
  };
  loop(root);
  [err1.val, err2.val] = [err2.val, err1.val];
};