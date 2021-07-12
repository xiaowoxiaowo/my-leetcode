/**
 * leetcode 275. H 指数 II
 * 
 * 给定一位研究者论文被引用次数的数组（被引用次数是非负整数），数组已经按照 升序排列 。编写一个方法，计算出研究者的 h 指数。
 * h 指数的定义: “h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （N 篇论文中）总共有 h 篇论文分别被引用了至少 h 次。
 * 其余的 N - h 篇论文每篇被引用次数不多于 h 次。
 * 
 * 输入: citations = [0,1,3,5,6]
 * 输出: 3 
 * 解释: 给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 0, 1, 3, 5, 6 次。
 * 由于研究者有 3 篇论文每篇至少被引用了 3 次，其余两篇论文每篇被引用不多于 3 次，所以她的 h 指数是 3。
 * 
 * 说明: 如果 h 有多有种可能的值 ，h 指数是其中最大的那个。
 */
// 方法很简单，主要是怎么去搜索该值，通过二分法O(logn)的时间复杂度去处理
var hIndex = function(citations) {
  const len = citations.length;
  if (len === 0) return 0;
  if (len === 1) return citations[0] ? 1 : 0;
  let left = 0, right = len - 1;
  while (left <= right) {
    const mid = Math.floor(left / 2 + right / 2);
    // 如果值大于下标位置
    if (citations[mid] >= len - mid) {
      if ((mid === left) || (citations[mid - 1] < len - mid + 1)) {
        // 如果mid节点满足条件，mid节点的左侧节点不满足条件，说明该节点即为最大h指数
        return len - mid;
      } else {
        // 如果左侧节点也满足条件，修改右边界
        right = mid - 1;
      }
    } else {
      // 如果值小于下标位置，该mid点不满足条件，修改左边界
      left = mid + 1;
    }
  }
  return 0;
};

console.log(hIndex([0,1,3,5,6]));
console.log(hIndex([1, 2, 100]));