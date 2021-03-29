/***
 * leetcode 437
 * 给定一个二叉树，它的每个结点都存放着一个整数值。找出路径和等于给定数值的路径总数。
 * 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 * 
 * 例1：
 * 输入: root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
 *					 10
 *					/  \
 *				 5   -3
 *				/ \    \
 *			 3   2   11
 *			/ \   \
 *		 3  -2   1
 * 
 * 输出: 3
 * 存在的路径，["5->3", "5->2->1", "-3->11"]
 * 
 * 
 * 解题思路：
 * 双重递归的思路，因为路径不需要从根节点开始，也不需要在叶子节点结束。
 * 所以我们需要先从根节点开始，不断向下递归。然后在递归的过程中，对每个递归到的节点，
 * 再次递归获取以该节点为根节点的符合要求的路径（此处思路可以参照 路径总和，注意这里没有提前结束条件，需要遍历完所有的节点）。
 */

var pathSum = function(root, sum) {
	if (!root) return 0;
	let res = 0;
	// 以当前节点为根节点，获取符合要求的路径
	res = findPath(root, sum);
	// 递归左右子树，每个节点都使用findPath方法获取到符合要求的路径
	res += pathSum(root.left, sum);
	res += pathSum(root.right, sum);
	return res;
};

// 获取符合要求路径树的方法，也是一个递归的方法
var findPath = function(node, sum) {
	if (!node) return 0;
	let res = 0;
	// 如果当前节点值等于目标节点，res加一即可，因为后续可能还有负数，所以不需要提前退出
	if (node.val === sum) res += 1;
	// 将sum - node.val传入，递归获取子树的路径
	res += findPath(node.left, sum - node.val);
	res += findPath(node.right, sum - node.val);
	return res;
}
