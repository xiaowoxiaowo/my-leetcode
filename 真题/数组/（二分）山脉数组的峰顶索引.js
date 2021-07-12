/**
 * leetcode 852 山脉数组的峰顶索引
 *
 * 符合下列属性的数组 arr 称为 山脉数组 ：
 * 
 *  - arr.length >= 3
 *  - 存在 i（0 < i < arr.length - 1）使得：
 *      - arr[0] < arr[1] < ... arr[i-1] < arr[i]
 *      - arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 * 
 * 给你由整数组成的山脉数组 arr ，返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i 。
 * 
 * 输入：arr = [0,1,0]
 * 输出：1
 * 
 * 输入：arr = [0,2,1,0]
 * 输出：1
 * 
 * 输入：arr = [0,10,5,2]
 * 输出：1
 * 
 * 输入：arr = [3,4,5,1]
 * 输出：2
 * 
 * 输入：arr = [24,69,100,99,79,78,67,36,26,19]
 * 输出：2
 * 
 */
// O(n)的方法
var peakIndexInMountainArray = function(arr) {
	let i = 1;
	while (i < arr.length - 1) {
		if (arr[i] > arr[i + 1]) return i;
		i ++;
	}
};

// 可以使用二分法来降低时间复杂度,顺序遍历多思考是否可以使用二分搜索来降低时间复杂度
var peakIndexInMountainArray = function(arr) {
	let left = 0, right = arr.length - 1;
	while (left < right) {
		let mid = Math.floor(left / 2 + right / 2);
		if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return mid;
		if (arr[mid] < arr[mid + 1]) left = mid;
		if (arr[mid] > arr[mid + 1]) right = mid + 1;
	}
	return -1;
};

console.log(peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19]));