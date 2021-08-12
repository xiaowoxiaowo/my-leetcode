/***
 * leetcode 47
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * 
 * 
 * 例1：
 * 输入：[1,2,3]
 * 输出：
 * [
 * [1,2,3],
 * [1,3,2],
 * [2,1,3],
 * [2,3,1],
 * [3,1,2],
 * [3,2,1]
 * ]
 * 
 * 输入：nums = [1,1,2]
 * 输出：
 * [
 * [1,1,2],
 * [1,2,1],
 * [2,1,1]
 * ]
 * 
 * 解题思路：
 * 层级递归思路，本题重点在于nums包含重复数字，需要去除这些重复的数组情况。
 * 重复的数组重点在于避免同级中出现重复数字递归的情况
 */

// 相对于全排列1的方法，这里主要就是先对数组进行排序，让相同的值排列在一起
// 然后在遍历的时候，去过滤这些相同值的元素
const permuteUnique = (nums) => {
  const res = [];
	const used = {};
	// 对nums先进行排序
	nums.sort((x, y) => x - y);
  function dfs(path) {
    if (path.length == nums.length) return res.push(path.slice()); 
    for (let i = 0; i < nums.length; i ++) {
			// 这里相对于全排列1，需要多出对相同值的过滤,需要有两个条件
			// 1.如果nums[i] === nums[i - 1]，即当前值等于上一个值
			// 2.而且上一个值必须不存在used中，即它们是同级的元素（如果是上次遍历调用dfs之后的循环，上一个元素已经被使用，所以used肯定存在该元素）
			// 假设有一个数组[1,1,2]
			// 第一层dfs：循环used保存第一个1, used = { 0: true }。遍历到第二个1，上一个已经回溯出used，不存在于used中，所以continue
			// 第二层dfs：第一层dfs已经保存了第一个1, used = { 0: true }。遍历到第二个1，used中还存在第一个1，所以!used[i - 1] = false，不跳过，将1继续加到数组中
			if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) continue;     
      used[i] = true;
      dfs([...path, nums[i]]);                   
      used[i] = false;     
    }
  }
  dfs([]);
  return res;
};

console.log(permuteUnique([1,1,2]));

