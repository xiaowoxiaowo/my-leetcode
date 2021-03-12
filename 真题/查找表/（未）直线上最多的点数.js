/***
 * leetcode 149
 * 给定一个二维平面，平面上有 n 个点，求最多有多少个点在同一条直线上。
 * 
 * 
 * 例1：
 * 输入: [[1,1],[2,2],[3,3]]
 * 输出: 3
 * 
 * 例2:
 * 输入：[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
 * 输出：4
 * 
 * 
 */
 [[0,0],[1,-1],[1,1]]

var getC = (point1, point2) => {
  if (point1[0] === point2[0]) return `x${point1[0]}`;
  if (point1[1] === point2[1]) return `y${point1[1]}`;
  const s = Math.round(((point1[0] - point2[0])/(point1[1] - point2[1]))*100)/100;
  return `${s},${point1[1] - (point1[0] * s)}`;
};

var maxPoints = function(points) {
  const len = points.length;
  if (len <= 2) return len;
  let map = new Map(), res = 0;
  for (let i = 0; i < len; i ++) {
    for (let j = i + 1; j < len; j ++) {
      const c = getC(points[i], points[j]);
      map.set(c, map.has(c) ? map.get(c) + 1 : 1);
    }
    let max = Math.max(...map.values()) + 1;
    map.clear();
    if (max > res) res = max;
  }
  return res;
};

console.log(maxPoints([[0,0],[1,-1],[1,1]]));