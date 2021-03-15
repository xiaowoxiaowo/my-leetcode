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
 * 解题思路：
 * 查找表的方法，两层循环，找到斜率一致便为一条直线上的点(因为都是依据当前的i所指向的点计算的斜率，所以肯定是在同一条线上，不需要考虑偏移)。
 * 这里需要注意，当两个点X轴或者Y轴的坐标一致时，斜率不存在，只需要记录该X轴或者Y轴的值即可。
 * 计算斜率时，一定要需要注意精确值。
 */

 // 直接除方法,精准度差，速度快
var getC = (point1, point2) => {
  if (point1[0] === point2[0]) return `x${point1[0]}`;
  if (point1[1] === point2[1]) return `y${point1[1]}`;
  const s = (point1[1] - point2[1])/(point1[0] - point2[0]);
  return `${s.toFixed(4)}`;
};
// 取最大公约数方法，精准度高，速度慢
const gcd = (a, b) => {
	if (b === 0) {
		return a
	}
	return gcd(b, a % b)
}

var getC = (point1, point2) => {
  if (point1[0] === point2[0]) return `x${point1[0]}`;
  if (point1[1] === point2[1]) return `y${point1[1]}`;
	const diff1 = point1[1] - point2[1]
	const diff2 = point1[0] - point2[0];
	const gcdValue = gcd(diff1, diff2);
  return `${diff1/gcdValue}/${diff2/gcdValue}`;
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

var maxPoints1 = function(points) {
	points.sort((a,b)=>a[0]-b[0]);
	console.log(points);
	let max = 1;
	const dfs = (startIndex, selected)=>{
			max = Math.max(max, selected.length); // 更新最大值
			for (let i = startIndex; i<points.length; ++i){
					if (selected.length < 2){ // 若当前数组元素小于2个，则无法计算斜率，继续无脑添加：）
							selected.push(points[i]);
							dfs(i+1, selected);
							selected.pop(); // 注意需要回溯一下，考虑不添加这个点的情况
					}else{
							const curK = (selected[0][0] - selected[1][0]) / (selected[0][1] - selected[1][1]); /* 当前数组中直线的斜率 */
							const thisK = (selected[0][0] - points[i][0]) / (selected[0][1] - points[i][1]); /* 新的点与数组中任一点的斜率 */
							if (curK === thisK){ /* 若新的点在直线上 */
									selected.push(points[i]);
									dfs(i+1, selected);
									selected.pop(); /* 回溯一下 */
							}
					}
			}
	}
	dfs(0, []);
	return max;
};


// console.log(maxPoints([[-9,-651],[-4,-4],[-8,-582],[9,591],[-3,3]]));
console.log(maxPoints1([[1,1], [2, 2]]));