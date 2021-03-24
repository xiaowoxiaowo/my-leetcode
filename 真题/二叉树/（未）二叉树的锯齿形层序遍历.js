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
 */
let val1 = { val: 1 };
val1.left = { val: 2, left: { val: 4 } };
val1.right = { val: 3, right: { val: 5 } };


var zigzagLevelOrder = function(root) {
  if (!root) return [];
	let stack = [], res = [];
	stack.push({ level: 0, node: root });
	while(stack.length) {
    console.log('==============');
    console.log(JSON.stringify(stack));
		let { level, node } = stack.shift();
    let first = (1 - level % 2) ? 'right' : 'left';
    let secord = (level % 2) ? 'right' : 'left';
		if (node[first]) stack.push({ level: level + 1, node: node[first] });
		if (node[secord]) stack.push({ level: level + 1, node: node[secord] });

    console.log(JSON.stringify(stack));
		if (level === res.length) {
			res.push([node.val]);
		} else {
			res[level].push(node.val);
		}
    console.log(JSON.stringify(res));
	}
	return res;
};

console.log(zigzagLevelOrder(val1));