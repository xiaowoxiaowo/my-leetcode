/***
 * leetcode 113
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 * 
 * 
 * 例1：
 * 输入: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * 输出: [[5,4,11,2],[5,8,4,5]]
 * 
 * 输入: root = [1,2,3], targetSum = 5
 * 输出: []
 * 
 * 输入: root = [1,2], targetSum = 0
 * 输出: []
 * 
 * 
 * 解题思路：
 * 递归，跟 二叉树的所有路径 类似，一层层遍历往下targetSum - root.val的值。
 * 当节点是叶子节点，而且当前节点的值跟传入的targetSum一致时，说明找到了符合要求的路径。
 * 然后往上返回一个含有当前节点的数组，每一层都给数组unshift入当前的节点，直到返回顶部。
 * 最终得到一个包含所有符合条件路径。
 */

// var pathSum = function(root, targetSum) {
//   // 递归终止条件
//   if (!root) return [];
//   // 当该节点时叶子节点，而且节点值等于targetSum时，返回一个双重数组
//   if (!root.left && !root.right && root.val === targetSum) return [[root.val]];

//   // 获取左侧以及右侧的路径节点的双重数组，然后给每个路径数组unshift一个当前节点的值
//   let left = pathSum(root.left, targetSum - root.val);
//   for (let i = 0; i < left.length; i ++) {
//     left[i].unshift(root.val);
//   }
//   let right = pathSum(root.right, targetSum - root.val);
//   for (let i = 0; i < right.length; i ++) {
//     right[i].unshift(root.val);
//   }
//   // 保持返回数组为一个双重数组
//   return [...left, ...right];
// };


// 学习递归回溯之后，重写的方法
// 更容易理解的递归解法
var pathSum = function(root, targetSum) { 
  if (!root) return [];
  const res = [];
  const loop = (node, target, arr) => {
    if (!node) return;
    const newArr = [...arr, node.val];
    const curTarget = target - node.val;
    if (!node.left && !node.right && curTarget === 0) return res.push(newArr);
    if (node.left) loop(node.left, curTarget, newArr);
    if (node.right) loop(node.right, curTarget, newArr);
  };
  loop(root, targetSum, []);
  return res;
}