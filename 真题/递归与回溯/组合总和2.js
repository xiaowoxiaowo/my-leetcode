/***
 * leetcode 40
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的每个数字在每个组合中只能使用一次。
 * 
 * 说明：
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 例1：
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 输出：
 * [
 * [1, 7],
 * [1, 2, 5],
 * [2, 6],
 * [1, 1, 6]
 * ]
 * 
 * 输入：candidates = [2,5,2,1,2], target = 5
 * 输出：
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 * 解题思路：
 * 组合总和 的升级版题目，思路一致，本题重点在于处理candidates中的重复数据，递归的同一层级里，不能重复递归相同的元素，
 * 不然会产生重复的数据，因为我们一开始对数据进行了排序，所以在同一层级中，只需要判断当前元素是否跟上一个元素相同即可，
 * 只有当不相同时，才去继续递归。只需要加一句代码即可
 * 
 * 本题如果要求计算组合总数，虽然是类似背包问题的题型，但是不适合使用动态规划。
 * 因为这里从candidates数组中取的值，有可能存在重复的值，但是对于背包问题，
 * 要么是0-1问题（每个只能取一次，意思就是每个值都不一样），要么是可重复问题（每个值都可以重复）
 * 所以并不符合常规的背包问题
 * 
 */
var combinationSum2 = function(candidates, target) {
  if (candidates.length < 1) return [];
  let res = [];
  // 先进行排序
  candidates.sort((a,b) => a - b);
  const loop = (val, arr, start) => {
    // 这里控制循环的起始节点
    for (let i = start; i < candidates.length; i ++) {
      // 跟 组合总和 相比，其实就是多了这句代码
      // 当前的元素必须跟上一个元素不一致
      // 否则跳出当前循环，进入下一次循环
      if ((i - 1) >= start  && candidates[i] === candidates[i - 1]) continue;
      let curVal = val + Number(candidates[i]);
      if (curVal < target) {
        loop(curVal, [...arr, candidates[i]], i + 1);
      } else if (curVal === target) {
        return res.push([...arr, candidates[i]]);
      } else {
        return;
      }
    }
  };
  loop(0, [], 0);
  return res;
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8));
