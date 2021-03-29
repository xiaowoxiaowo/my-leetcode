/***
 * leetcode 235
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * 
 * 公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，
 * 满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 * 
 *                    6
 *                  /   \
 *                 2     8
 *                / \    /\
 *               0   4  7  9
 *                  / \
 *                 3   5
 * 
 * 例1：
 * 输入: root = [6,2,8,0,4,7,9,null,null,3,5] p = 2, q = 8
 * 输出: 6
 * 
 * 例2：
 * 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
 * 输出: 2
 * 
 * 提示：
 * 所有节点值都是唯一的
 * p、q 为不同节点且均存在于给定的二叉搜索树中。
 * 
 * 解题思路：
 * 因为是二叉搜索树，当p和q都大于或者小于root的值的时候，还需要继续递归左或者右节点。
 * 其他情况，root即为两个值的公共祖先。
 * PS：如果本题没有给出p，q两个一定存在，还需要先判断这两个点是否存在该二叉树
 */

var lowestCommonAncestor = function(root, p, q) {
	if (!root) return null;
	let val = root.val;
	if (p.val < val && q.val < val) return lowestCommonAncestor(root.left, p, q);
	if (p.val > val && q.val > val) return lowestCommonAncestor(root.right, p, q);
	return root;
};