/***
 * leetcode 42
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 *  |
 *  |               1 
 *  |       1 x x x 1 1 x 1
 *  |   1 x 1 1 x 1 1 1 1 1  1    
 *  | - - - - - - - - - - -  -   
 *  | 0 1 2 3 4 5 6 7 8 9 10 11
 * 
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（x部分表示雨水）。
 *  
 *  |           1
 *  | 1 x x x x 1   
 *  | 1 x x 1 x 1
 *  | 1 1 x 1 1 1 
 *  | 1 1 x 1 1 1  
 *  | - - - - - -  
 *  | 0 1 2 3 4 5 
 * 
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9 
 */

// 暴力解法
// var trap = function(height) {
//   let res = 0;
//   const len = height.length;
//   const max = Math.max(...height);
//   for (let i = 1; i <= max; i ++) {
//     let arrIndex = 0;
//     let hasVal = false;
//     let sum = 0;
//     while (arrIndex < len) {
//       if (height[arrIndex] >= i) {
//         hasVal = true;
//         res = res + sum;
//         sum = 0;
//       } else {
//         if (hasVal) {
//           sum++;
//         }
//       }
//       arrIndex++;
//     }
//   }
//   return res;
// };


// 双指针
var trap = function(height) {
  const len = height.length;
  if (len <= 2) return 0;
  let res = 0;
  let left = 0, right = len - 1;
  let leftMax = 0, rightMax = 0;
  while (left < right) {
    // 存储左右两侧遍历时的最大值
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (height[left] < height[right]) {
      // 右侧最大值大于左侧最大值，左侧最大值为短板
      // 当前节点的可接雨水大小即为当前节点与左侧目前最大值的差
      res += leftMax - height[left];
      left++;
    } else {
      // 右侧最大值小于左侧最大值，右侧最大值为短板
      res += rightMax - height[right];
      right--;
    }
  }
  return res;
};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));