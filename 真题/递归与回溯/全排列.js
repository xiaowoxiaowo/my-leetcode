/***
 * leetcode 46
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
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
 * 解题思路：
 * 递归遍历
 */

var permute = function(nums) {
	if (nums.length <= 1) return [nums];
	let res = [];
	// 递归方法
	const loop = (arr, s) => {
		// 如果arr长度为1，返回结果
		if (arr.length === 1) return res.push([...s, arr[0]]);
		// 遍历数组元素
		for(let i = 0; i < arr.length; i ++) {
			let cur = [...arr];
			let val = arr[i];
			cur.splice(i, 1);
			// 取出当前取值的元素以及路径数组传入下一层循环
			loop(cur, [...s, val])
		}
	};
	loop(nums, []);
	return res;
};

const permute = (nums) => {
  const res = [];
  const used = {};

  function dfs(path) {
    if (path.length == nums.length) return res.push(path.slice()); 
    for (const num of nums) {
      if (used[num]) continue;       
      used[num] = true;
      dfs([...path, num]);                   
      used[num] = false;     
    }
  }

  dfs([]);
  return res;
};