/**
 * leetcode 207. 课程表
 * 
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
 * 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
 * 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
 * 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。
 * 
 * 输入：numCourses = 2, prerequisites = [[1,0]]
 * 输出：true
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
 * 
 * 输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
 * 输出：false
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
 * 
 */
// 查找表 + BFS思路
// 先对prerequisites建立反向的查找表，以bi为key，ai作为val（可能有多个，作为数组存储）
// 然后建立一个数组，记录，所有选修课程所需要的必修课程数量
// 将需要必修课程数量的选修课程存入队列中进行BFS遍历
// 不断查找已完成选修课程所对应的其他选修课程
var canFinish = function(numCourses, prerequisites) {
  const numList = new Array(numCourses).fill(0);
  const map = new Map();
  // 建立查找表
  for (let [key, val] of prerequisites) {
    // 记录所有选修课程所需要的必修课程数量
    numList[key]++;
    // 对prerequisites建立反向的查找表，以bi为key，ai作为val（可能有多个，作为数组存储）
    const list = map.get(val);
    if (list) {
      list.push(key);
      map.set(val, list);
    } else {
      map.set(val, [key]);
    }
  }
  // 建立队列
  const queue = [];
  // 计数
  let count = 0;
  // 把numList中值为0的项，即不需要必修课程的项存入队列中
  for (let n = 0; n < numList.length; n ++) {
    if (!numList[n]) queue.push(n);
  }
  // BFS遍历
  while(queue.length) {
    // 每修完一个课程，计数加1
    count++;
    const item = queue.shift();
    if (map.has(item)) {
      // 修完了当前课程，查看有没有将当前课程作为必修的其他课程
      for (let i of map.get(item)) {
        // 将其他课程的必修计数减1
        numList[i]--;
        // 如果其他课程的必修计数变为0了，存入队列中，进入BFS遍历
        if (numList[i] === 0) queue.push(i);
      }
    }
  }
  return count === numCourses;
};

console.log(canFinish(2, [[0, 1]]));
console.log(canFinish(3, [[1,0],[1,2],[0,1]]));
