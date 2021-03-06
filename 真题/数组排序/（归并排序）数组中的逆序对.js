/***
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
 * 输入一个数组，求出这个数组中的逆序对的总数。
 * 
 * 例：
 * 输入: [7,5,6,4]
 * 输出: 5
 * 
 * 思路：使用归并排序的特性来计算逆序对
 */
function _merge(list, l, mid, r) {
	const aux = new Array(r - l + 1);

	for (let i = l; i <= r; i ++) {
		aux[i - l] = list[i];
	}

	let i = l;
	let j = mid + 1;
	for (let k = l; k <= r; k++) {
		if (i > mid) {
			list[k] = aux[j - l];
			j++;
		} else if (j > r) {
			list[k] = aux[i - l];
			i++;
		} else if ( aux[i - l] <= aux[j - l] ) {
			list[k] = aux[i - l];
			i++;
		} else {
			list[k] = aux[j - l];
			j++;
			count = count +  mid - i + 1;
		}
	}
}

function _mergeSort(list, l, r) {
	if (l >= r) return;

	let mid = Math.floor((l + r)/2);
	_mergeSort(list, l, mid);
	_mergeSort(list, mid + 1, r);
	if (list[mid] >= list[mid + 1]) {
		_merge(list, l, mid, r);
	}
}

let count = 0;

var reversePairs = function(nums) {
	const list = nums.slice();
	const len = list.length;
	_mergeSort(list, 0, len - 1);
	const res = count;
	count = 0;
	return res;
};