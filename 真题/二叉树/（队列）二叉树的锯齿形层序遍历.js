/***
 * leetcode 103
 * 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
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
 * [20,9],
 * [15,7]
 * ]
 * 
 * 输入：[1,2,3,4,null,null,5]
 *       1
 *      / \
 *     2   3
 *    /     \
 *   4       5
 * 
 * 输出: [[1],[3,2],[5,4]]
 * 预期结果：[[1],[3,2],[4,5]]
 * 
 * [3,9,20,null,null,15,7]
 *       3
 *      / \
 *     9   20
 *        /  \
 *       15   7
 * 
 * 输出：[[3],[9,20],[7,15]]
 * 预期结果：[[3],[20,9],[15,7]]
 * 
 * 解题思路：
 * 
 * 跟 二叉树的层序遍历 思路一致，使用队列进行层序遍历。只需要根据层级，push或者unshift把数字正序或者倒序推入结果数组即可
 * 
 */
let val1 = { val: 1 };
val1.left = { val: 2, left: { val: 4 } };
val1.right = { val: 3, right: { val: 5 } };


var zigzagLevelOrder = function(root) {
  if (!root) return [];
	let queue = [], res = [];
	queue.push({ level: 0, node: root });
	while(queue.length) {
		let { level, node } = queue.shift();
		if (node.left) queue.push({ level: level + 1, node: node.left });
		if (node.right) queue.push({ level: level + 1, node: node.right });

		// 如果是奇数层级，使用unshift逆序推入数组。
		// 如果是偶数，使用push正序推入数组
		let cz = (level % 2) ? 'unshift' : 'push';

		if (level === res.length) {
			res.push([node.val]);
		} else {
			res[level][cz](node.val);
		}
	}
	return res;
};

console.log(zigzagLevelOrder(val1));