/***
 * leetcode 236
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 
 * 公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，
 * 满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 * 
 *                    3
 *                  /   \
 *                 5     1
 *                / \    /\
 *               6   2  0  8
 *                  / \
 *                 7   4
 * 
 * 例1：
 * 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * 输出: 3
 * 
 * 例2：
 * 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * 输出: 5
 * 
 * 例3：
 * 输入: root = [1,2], p = 1, q = 2
 * 输出: 1
 * 
 * 提示：
 * 树中节点数目在范围 [2, 105] 内。
 * -109 <= Node.val <= 109
 * 所有 Node.val 互不相同 。
 * p != q
 * p 和 q 均存在于给定的二叉树中。
 * 
 * 解题思路：
 */

// 初始思路，通过findNode方法判断节点是否存在在左右子树上，然后遍历
const findNode = (root, key) => {
  if (root === null) return false;
  if (root.val === key) return true;
  if (findNode(root.left, key) || findNode(root.right, key)) return true;
  return false;
};

var lowestCommonAncestor = function(root, p, q) {
  if (root.val === p.val || root.val === q.val) return root;
  let left1 = findNode(root.left, p.val);
  let right1 = findNode(root.left, q.val);
  if (left1 !== right1) return root;
  if (left1) return lowestCommonAncestor(root.left, p, q);
  if (!left1) return lowestCommonAncestor(root.right, p, q);
};


// 优化思路，不需要额外判断节点是否在左或右子树上存在，通过一次递归来判断是否存在，并返回公共祖先
const lowestCommonAncestor = (root, p, q) => {
  // 递归的两个终止条件
  if (!root) return null;
  if (root == q || root == p) return root;
  // 对左右子树进行递归
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  // 如果两个节点分别在左子树和右子树上，该父节点即为公共祖先
  if (left && right) return root;
  // 如果只有一侧有返回节点，返回该节点（已经递归到到p或者q节点了）
  if (left == null) return right;
  return left;
};