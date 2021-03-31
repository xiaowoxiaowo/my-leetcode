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

var permuteUnique = function(nums) {
  if (nums.length <= 1) return [nums];
  // 需要先进行排序
  nums.sort((a, b) => a - b);
  // 用visited来记录每一层级层级使用过的val值
  let res = [], visited = [];
  // 递归的思路不变，主要是去除重复数字的情况
  const loop = (arr, s) => {
    if (s.length === nums.length) return res.push(s);
    for (let i = 0; i < arr.length; i ++) {
      let len = s.length;
      let newArr = [...arr];
      let val = arr[i];
      // len可以代表当前是在递归数组中的第几个元素
      // 如果当前层级曾经使用过val值，避免这次遍历
      if (visited[len] === val) continue;
      // 设置上一次循环使用的val值
      visited[len] = val;
      // 当递归中的父层级进入下一次循环的时候，需要清除子层级的visited值
      visited = visited.slice(0, len + 1);
      newArr.splice(i, 1);
      loop(newArr, [...s, val]);
    }
  };
  loop(nums, []);
  return res;
};

console.log(permuteUnique([1,1,2]));
