/***
 * leetcode 104
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
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
 * 输出: 3
 * 
 * 
 * 解题思路：
 * 
 */

var maxDepth = function(root) {
	if (!root) return 0;
	let maxLeftDepth = maxDepth(root.left);
	let maxRightDepth = maxDepth(root.right);
	return Math.max(maxLeftDepth, maxRightDepth) + 1;
};