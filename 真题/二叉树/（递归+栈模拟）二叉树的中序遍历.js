/***
 * leetcode 94
 * 给你二叉树的根节点 root ，返回它节点值的 中序 遍历。
 * 
 * 前序指的是，访问顺序  左侧节点（如还有子节点，依次访问）-->本节点-->右侧节点
 * 
 * 中序：对于二分搜索树，中序遍历的操作顺序（或输出结果顺序）是符合从小到大（或从大到小）顺序的，故要遍历输出排序好的结果需要使用中序遍历
 * 
 * 例1：
 * 输入: root = [1,null,2,3]
 * 输出: [1,3,2]
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
 * 输出：[2,1]
 * 
 * 例5：
 * 输入：root = [1,null,2]
 * 输出：[1,2]
 * 
 * 解题思路：
 * 两种解题思路，一种递归思路，一种是栈模拟思路（重点）。
 * 
 * 栈模拟思路跟前序遍历相比，只是改变一下当类型为go时，push入栈的三个属性的顺序即可。
 * 递归思路也是一样，更换位置即可
 * 
 */

// 递归思路
var inorderTraversal = function(root) {
	let result = [];
	var preOrderTraverseNode = (node) => {
		if(node) {
      preOrderTraverseNode(node.left)
			result.push(node.val)
			preOrderTraverseNode(node.right)
		}
	}
	preOrderTraverseNode(root);
	return result;
};


// 栈模拟思路（跟前序遍历相比，只是改变一下当类型为go时，push入栈的三个属性的顺序即可）
var inorderTraversal = function(root) {
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
			stack.push({ type: 'print', node });
			if (node.left) stack.push({ type: 'go', node: node.left });
		}
	}
	return res;
}