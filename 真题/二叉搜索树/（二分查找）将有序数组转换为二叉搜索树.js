/***
 * leetcode 108
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
 * 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
 * 
 * 
 * 例1：
 * 输入: nums = [-10,-3,0,5,9]
 * 输出：[0,-3,9,-10,null,5]
 * [0,-10,5,null,-3,null,9] 也将被视为正确答案：
 * 
 * 例2：
 * 输入: nums = [1,3]
 * 输出：[3,1]
 * [1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。
 * 
 * 解题思路：
 * 二叉搜索树的特性，一个根节点，它的左子树的所有值都小于它，它的右子树的所有值都大于它。
 * 数组是 升序 排列的，二分搜索法得到的值，左侧都小于它，右侧都大于它，就可以作为一个个根节点的值。
 * 左右节点，继续通过二分搜索法遍历。
 */

const buildBST = (nums, start, end) => {
  // 如果start > end，说明已经没有值了，返回null
  // 这里不能=，因为start = end的时候，说明还有一个叶子节点
  if (start > end) return null;
  // 二分搜索，取中间值
  let mid = Math.floor((start + end)/2);
  // 以中间值为根节点值
  let root = new TreeNode(nums[mid]);
  // 继续遍历左右子节点
  root.left = buildBST(nums, start, mid - 1);
  root.right = buildBST(nums, mid + 1, end);
  return root;
};

var sortedArrayToBST = function(nums) {
  return buildBST(nums, 0, nums.length - 1);
}

































const buildBST = (nums, start, end) => {
  if (start > end) { // 构成不了区间，返回null
    return null;
  }

  const midIndex = (start + end) >>> 1; // 求中间索引
  const root = new TreeNode(nums[midIndex]); // 构建当前节点

  root.left = buildBST(nums, start, midIndex - 1); // 构建左子树
  root.right = buildBST(nums, midIndex + 1, end); // 构建右子树

  return root;
};

var sortedArrayToBST = function(nums) {
  return buildBST(nums, 0, nums.length - 1); // 递归的入口
};
