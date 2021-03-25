/***
 * leetcode 144
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 * 
 * 前序指的是，访问顺序  本节点-->左侧节点（如还有子节点，依次访问）-->右侧节点
 * 
 * 前序：在第一次遍历到节点时就执行操作，一般只是想遍历执行操作（或输出结果）可选用先序遍历；
 * 
 * 例1：
 * 输入: root = [1,null,2,3]
 * 输出: [1,2,3]
 * 
 * 例2：
 * 输入: root = []
 * 输出: []
 * 
 * 例3：
 * 输入：root = [1]
 * 输出：[1]
 * 
 * 例4：
 * 输入：root = [1,2]
 * 输出：[1,2]
 * 
 * 例5：
 * 输入：root = [1,null,2]
 * 输出：[1,2]
 * 
 * 解题思路：
 * 两种解题思路，一种递归思路，一种是栈模拟思路（重点）。
 * 
 * 栈模拟思路就是通过栈来模拟递归的实现，对于二叉树来说。
 * 
 */

// 递归思路
var preorderTraversal = function(root) {
	let result = [];
	var preOrderTraverseNode = (node) => {
		if(node) {
			// 先根节点
			result.push(node.val)
			// 然后遍历左子树
			preOrderTraverseNode(node.left)
			// 再遍历右子树
			preOrderTraverseNode(node.right)
		}
	}
	preOrderTraverseNode(root);
	return result;
};


// 栈模拟思路
var preorderTraversal = function(root) {
	let res = [], stack = [];
	if (!root) return stack;
	// 初始化，把go类型的根节点push进栈中
	stack.push({ type: 'go', node: root });
	// 遍历
	while (stack.length) {
		// 从栈中pop出值
		let { type, node } = stack.pop();
		// 如果是print类型的，加到res结果中
		if (type === 'print') res.push(node.val);
		// 如果是go类型的，依次把当前二叉树的右侧节点（如果存在），左侧节点（如果存在），print类型的本节点push入栈
		if (type === 'go') {
			if (node.right) stack.push({ type: 'go', node: node.right });
			if (node.left) stack.push({ type: 'go', node: node.left });
			stack.push({ type: 'print', node });
		}
	}
	return res;
}