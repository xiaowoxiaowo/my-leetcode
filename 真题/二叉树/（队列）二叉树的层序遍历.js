/***
 * leetcode 102
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
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
 * 输出: 
 * [
 * [3],
 * [9,20],
 * [15,7]
 * ]
 * 
 * 
 * 解题思路：
 * 运用队列的思路，通过定义的level来存放至对应的层级数据中，非常经典和基础的题。
 */

var levelOrder = function(root) {
	if (!root) return [];
	let queue = [], res = [];
	queue.push({ level: 0, node: root });
	while(queue.length) {
		let { level, node } = queue.shift();

		if (node.left) queue.push({ level: level + 1, node: node.left });
		if (node.right) queue.push({ level: level + 1, node: node.right });

		if (level === res.length) {
			res.push([node.val]);
		} else {
			res[level].push(node.val);
		}
	}
	return res;
};


