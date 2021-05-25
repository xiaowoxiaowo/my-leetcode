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

// 自己实现的一种思路，先用对撞指针找到两侧的开始节点
// 从左到右遍历，找到比左侧节点大的节点，计算空缺的面积（可接雨水面积），然后从该节点开始，继续遍历
// 如果找不到比自己大的节点，即跟当前节点中最大值的节点进行面积计算，然后从该节点开始，继续遍历
var trap = function(height) {
  let res = 0;
  const len = height.length;
  if (len <= 2) return 0;
  let startL = 0, startR = len - 1;
  // 初始化，使用对撞指针找到两侧的开始节点，必须是从头或者从尾一直递增的最大值
  while (startL < startR) {
    let isOver = 0;
    if (height[startL + 1] >= height[startL]) {
      startL++;
      isOver++;
    }
    if (height[startR - 1] >= height[startR]) {
      startR--;
      isOver++;
    }
    if (!isOver) break;
  }
  if (startR - startL < 2) return 0;
  const getHeight = (l, r) => {
    let s = 0;
    for (let i = l + 1; i < r; i ++) {
      s += Number(height[i]);
    }
    return s;
  };
  let curH = height[startL];
  let secondH = [0, 0];
  let index = startL + 1;
  while (index <= startR) {
    if (height[index] >= curH) {
      // 如果找到了比自己大的节点，计算面积
      res += (index - startL - 1) * curH - getHeight(startL, index);
      curH = height[index];
      startL = index;
      secondH = [0, 0];
    } else {
      // 比自己小的面积，存一个比自己小的，最大值的节点
      if (height[index] > secondH[1]) {
        secondH = [index, height[index]];
      }
    }
    index++;
    // 如果遍历完成，有可能是因为没找到比自己大的节点
    if (index > startR && startL < startR) {
      const [i, h] = secondH;
      res += (i - startL - 1) * h - getHeight(startL, i);
      curH = h;
      startL = i;
      index = i + 1;
      secondH = [0, 0];
    }
  }
  return res;
};

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

