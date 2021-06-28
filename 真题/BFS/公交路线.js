/***
 * leetcode 815. 公交路线
 * 
 * 给你一个数组 routes ，表示一系列公交线路，其中每个 routes[i] 表示一条公交线路，第 i 辆公交车将会在上面循环行驶。
 * 例如，路线 routes[0] = [1, 5, 7] 表示第 0 辆公交车会一直按序列 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... 这样的车站路线行驶。
 * 现在从 source 车站出发（初始时不在公交车上），要前往 target 车站。 期间仅可乘坐公交车。
 * 求出 最少乘坐的公交车数量 。如果不可能到达终点车站，返回 -1 。
 * 
 * 输入：routes = [[1,2,7],[3,6,7]], source = 1, target = 6
 * 输出：2
 * 解释：最优策略是先乘坐第一辆公交车到达车站 7 , 然后换乘第二辆公交车到车站 6 。 
 * 
 * 输入：routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
 * 输出：-1
 * 
 */
// 直接bfs，会超时
var numBusesToDestination = function(routes, source, target) {
  if (source === target) return 0;
  let step = 1;
  const bfs = [source];
  const visited = new Set();
  const routesUsed = new Set();
  while (bfs.length) {
    const len = bfs.length;
    for (let x = 0; x < len; x ++) {
      const item = bfs.shift();
      for (let i = 0; i < routes.length; i ++) {
        if (routesUsed.has(i)) continue;
        if (routes[i].indexOf(item) > -1) {
          if (routes[i].indexOf(target) > -1) return step;
          for (let j = 0; j < routes[i].length; j ++) {
            const val = routes[i][j];
            if (val === item) continue;
            if (visited.has(val)) continue;
            if (val === target) return step;
            bfs.push(val);
            visited.add(val);
          }
          routesUsed.add(i);
        }
      }
    }
    step ++;
  }
  return -1;
};

// 先建图，再BFS，降低时间复杂度
var numBusesToDestination = function(routes, source, target) {
  if (source === target) return 0;
  let step = 1;
  const bfs = [source];
  // 记录遍历过的公交线路
  const visited = new Set();
  // 记录遍历过的公交站点
  const routesUsed = new Set();
  // 建立图，key值为所有的站点，value为该站点所有经过的公交线路
  const map = new Map();
  for (let i = 0; i < routes.length; i++) {
    for (const site of routes[i]) {
      let list = (map.get(site) || [])
      list.push(i)
      map.set(site, list)
    }
  }
  // bfs遍历
  while (bfs.length) {
    const len = bfs.length;
    for (let x = 0; x < len; x ++) {
      const item = bfs.shift();
      // 根据遍历到的站点，在图中获取该站点所有的公交线路的数组
      const busList = map.get(item);
      // 遍历公交线路的数组
      for (let i = 0; i < busList.length; i ++) {
        const index = busList[i];
        // 得到该公交线路下的所有站点的数组
        const list = routes[index];
        // 如果该公交线路已经被遍历过，跳过当次循环
        if (routesUsed.has(index)) continue;
        // 记录公交线路
        routesUsed.add(index);
        // 遍历该公交线路下的所有站点
        for (let j = 0; j < list.length; j ++) {
          const val = list[j];
          // 如果跟一开始遍历到的站点一致，跳过
          if (val === item) continue;
          // 如果当前站点曾经被遍历过，跳过
          if (visited.has(val)) continue;
          // 如果当前站点就是终点，返回步数
          if (val === target) return step;
          bfs.push(val);
          visited.add(val);
        }
      }
    }
    step ++;
  }
  return -1;
};


console.log(numBusesToDestination([[0,1,6,16,22,23],[14,15,24,32],[4,10,12,20,24,28,33],[1,10,11,19,27,33],[11,23,25,28],[15,20,21,23,29],[29]], 4, 21));
