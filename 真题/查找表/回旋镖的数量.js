/***
 * leetcode 447
 * 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组 ，
 * 其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。
 * 返回平面上所有回旋镖的数量。
 * 
 * 
 * 例1：
 * 输入: points = [[0,0],[1,0],[2,0]]
 * 输出: 2
 * 
 * 例2:
 * 输入：points = [[1,1],[2,2],[3,3]]
 * 输出：2
 * 
 * 例3:
 * 输入：points = [[1,1]]
 * 输出：0
 * 
 * 说明:
 * 	n == points.length
 * 	1 <= n <= 500
 * 	points[i].length == 2
 * 	-10000 <= xi, yi <= 10000
 * 	所有点都 互不相同
 * 
 * 思路：以i点为关键点，遍历以i为基准点的所有距离，然后通过map类型计算出结果 O(n^2)
 */

const getDis = (points1, points2) => {
	const x = points2[0] - points1[0];
	const y = points2[1] - points1[1];
	return x*x + y*y;
};

var numberOfBoomerangs = function(points) {
	let len = points.length, map = new Map(), res = 0;
	for (let i = 0; i < len; i ++) {
		for (let j = 0; j < len; j ++) {
			if (j !== i) {
				const dis = getDis(points[i], points[j]);
				map.set(dis, map.has(dis) ? map.get(dis) + 1 : 1);
			}
		}
		for (let [key, value] of map) {
			res = res + value * (value - 1);
		}
		map.clear();
	}
	
	return res;
};

console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]));