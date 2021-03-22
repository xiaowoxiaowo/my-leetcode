/***
 * leetcode 94
 * 给你二叉树的根节点 root ，返回它节点值的 后序 遍历。
 * 
 * 后序指的是，访问顺序  左侧节点-->右侧节点（如还有子节点，依次访问）-->本节点
 * 
 * 后序：后续遍历的特点是执行操作时，肯定已经遍历过该节点的左右子节点，故适用于要进行破坏性操作的情况，比如删除所有节点
 * 
 * 例1：
 * 输入: root = [1,null,2,3]
 * 输出: [3,2,1]
 * 
 * 
 * 解题思路：
 * 两种解题思路，一种递归思路，一种是栈模拟思路（重点）。
 * 
 * 栈模拟思路跟前序遍历相比，只是改变一下当类型为go时，push入栈的三个属性的顺序即可
 * 
 */

// 递归思路
var postorderTraversal = function(root) {
	let result = [];
	var preOrderTraverseNode = (node) => {
		if(node) {
      preOrderTraverseNode(node.left)
			preOrderTraverseNode(node.right)
			result.push(node.val)
		}
	}
	preOrderTraverseNode(root);
	return result;
};


// 栈模拟思路（跟前序遍历相比，只是改变一下当类型为go时，push入栈的三个属性的顺序即可）
var postorderTraversal = function(root) {
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
			stack.push({ type: 'print', node });
			if (node.right) stack.push({ type: 'go', node: node.right });
			if (node.left) stack.push({ type: 'go', node: node.left });
		}
	}
	return res;
}