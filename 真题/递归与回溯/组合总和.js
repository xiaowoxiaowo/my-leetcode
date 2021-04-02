/***
 * leetcode 39
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的数字可以无限制重复被选取。
 * 
 * 说明：
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 例1：
 * 输入: candidates = [2,3,6,7], target = 7,
 * 输出：
 * [
 * [7],
 * [2,2,3]
 * ]
 * 
 * 输入：candidates = [2,3,5], target = 8,
 * 输出：
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 * 
 * 解题思路：
 * 递归回溯，重点在于需要避免重复的组合，我们可以对数组进行升序排序，这样每个元素右侧的元素都是大于或者等于该元素的项。
 * 每一层递归的时候，只能继续递归上一层元素本身，或者右侧的元素。保持返回的值，都是升序的，这样就可以避免重复的项。
 */

var combinationSum = function(candidates, target) {
  if (candidates.length < 1) return [];
  let res = [];
  // 对数组进行排序
  candidates.sort((a,b) => a - b);
  const loop = (val, arr, start) => {
    // 因为数组已经经过排序，控制每次传入元素的大小只需要控制遍历时候的起始位置
    for (let i = start; i < candidates.length; i ++) {
      // 获取当前值 + 上层值的结果
      let curVal = val + Number(candidates[i]);
      if (curVal < target) {
        // 如果小于目标值，继续递归
        loop(curVal, [...arr, candidates[i]], i);
      } else if (curVal === target) {
        // 如果等于目标值，返回结果
        // 因为数组已经排过序了，后面的值都是大于或者等于当前元素的值，不需要再遍历了，可以停止for循环了。（剪枝）
        return res.push([...arr, candidates[i]]);
      } else { 
        // 如果已经大于目标值了，因为后面的值都是大于或者等于当前元素的值，可以直接return
        return;
      }
    }
  };
  loop(0, [], 0);
  return res;
};

console.log(combinationSum([2,7,6,3,5,1], 9));
