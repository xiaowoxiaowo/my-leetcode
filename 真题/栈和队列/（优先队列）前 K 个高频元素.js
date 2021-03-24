/***
 * leetcode 347
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 * 
 * 例1：
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 * 
 * 例2：
 * 输入: nums = [1], k = 1
 * 输出: [1]
 * 
 * 提示：
 * 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
 * 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
 * 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
 * 你可以按任意顺序返回答案。
 * 
 * 解题思路：
 * 
 * 正常应该是使用优先队列来实现，js没有优先队列的数据类型用，只能靠手写堆实现（太惨了）。
 * 优先队列暂时不在本次算法学习内容当中，所以本题用其他方法去解。
 * 
 */

// 先计算所有数据的出现频率，然后对数据进行排序，得出频次最多的几项
var topKFrequent = function(nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
		let num = nums[i];
		let count = map.get(num);
		map.set(num, count ? count + 1 : 1);
  }
  let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(sorted[i][0]);
  }
  return result;
};


// 桶排序，适合数组中数据差异不是很大的情况
let topKFrequent = function(nums, k) {
	// 这里跟上面的思路一致
	let map = new Map();
	nums.map((num) => {
			if(map.has(num)) map.set(num, map.get(num)+1)
			else map.set(num, 1)
	})
	
	// 如果元素数量小于等于 k
	if(map.size <= k) {
			return [...map.keys()]
	}
	
	return bucketSort(map, k)
};

// 桶排序
let bucketSort = (map, k) => {
	let arr = [], res = []
	// map数据类型可以被forEach遍历
	map.forEach((value, key) => {
			// 利用映射关系（出现频率作为下标）将数据分配到各个桶中
			if(!arr[value]) {
					arr[value] = [key]
			} else {
					arr[value].push(key)
			}
	})
	// 倒序遍历获取出现频率最大的前k个数
	for(let i = arr.length - 1;i >= 0 && res.length < k;i--){
			if(arr[i]) {
					res.push(...arr[i])
			}
}
return res
}