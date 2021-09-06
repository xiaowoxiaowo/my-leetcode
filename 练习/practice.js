/**
 * leetcode 338. 比特位计数
 * 
 * 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
 * 
 * 输入: 2
 * 输出: [0,1,1]
 * 
 * 输入: 5
 * 输出: [0,1,1,2,1,2]
 * 
 * 要求算法的空间复杂度为O(n)。
 * 要求在C++或任何其他语言中不使用任何内置函数
 */
var countBits = function(n) {
  const map = new Map();
  let res = [0];
  let pre = 0;
  for (let i = 1; i <= n; i ++) {
    if ((i % 2) === 0) {
      let nextKey = 2;
      map.clear(1);
      while(true) {
        if (map.has(nextKey)) {
          map.delete(nextKey);
          nextKey++;
        } else {
          map.set(nextKey, true);
          break;
        }
      }
      pre = map.size;
      res.push(pre);
    } else {
      map.set(1, true);
      res.push(++pre);
    }
  }
  return res;
};

console.log(countBits(8));

// 0000 0
// 0001 1
// 0010 2
// 0011 3
// 0100 4
// 0101 5
// 0110 6
// 0111 7
// 1000 8
