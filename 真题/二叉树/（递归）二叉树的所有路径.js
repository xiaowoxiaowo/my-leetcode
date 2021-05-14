/***
 * leetcode 257
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 * 
 * 
 * 例1：
 * 输入: 
 *          1
 *				/   \
 *				2     3
 *				\
 *					5
 * 
 * 输出: ["1->2->5", "1->3"]
 * 
 * 
 * 解题思路：
 * 递归的思路，从底部的叶子节点开始向上传递一个数组，每一层都给返回的数组中的字符串中添加自己节点的值。
 */

// var binaryTreePaths = function(root) {
// 	if (!root) return [];
// 	let res = [];
// 	// 如果当前节点是叶子节点,将当前节点值push进res，返回上层
// 	if (!root.left && !root.right) {
// 		res.push(String(root.val));
// 		return res;
// 	}
// 	// 左侧树，给下层返回的res数组中的每个元素添加当前节点的val值
// 	let leftList = binaryTreePaths(root.left);
// 	for (let i = 0; i < leftList.length; i ++) {
// 		res.push(`${root.val}->${leftList[i]}`);
// 	}
// 	// 右侧树，给下层返回的res数组中的每个元素添加当前节点的val值
// 	let rightList = binaryTreePaths(root.right);
// 	for (let i = 0; i < rightList.length; i ++) {
// 		res.push(`${root.val}->${rightList[i]}`);
// 	}
// 	return res;
// };


// 更加习惯的递归方法
var binaryTreePaths = function(root) {
	if (!root) return [];
	if (!root.left && !root.right) return [String(root.val)];
	const res = [];
	const loop = (node, arr) => {
		const newArr = [...arr, String(node.val)];
		if (!node.left && !node.right) return res.push(newArr.join('->'));
		if (node.left) loop(node.left, newArr);
		if (node.right) loop(node.right, newArr);
	};
	loop(root, []);
	return res;
}