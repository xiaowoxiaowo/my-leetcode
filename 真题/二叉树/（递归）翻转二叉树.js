/***
 * leetcode 226
 * 翻转一棵二叉树。
 * 
 * 例1：
 * 输入:
 * 
 *       4
 *     /   \
 *    2     7
 *   / \   /  \
 *  1   3  6   9
 * 
 * 输出: 
 * 
 *       4
 *     /   \
 *    7     2
 *   / \   /  \
 *  9   6  3   1
 * 
 * 
 * 解题思路：
 * 
 * 
 */

var invertTree = function(root) {
	if (!root) return root;
	invertTree(root.left);
	invertTree(root.right);
	[root.left, root.right] = [root.right, root.left];
	return root;
};