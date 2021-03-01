/**
 * 归并排序法 O(nlogn)
 * 先把一串数字一次次对等分隔开，直到每一个分隔里都只有1个数字，然后一层层往上归并排序。
 * 优化：不一定需要分隔到1个数字，可以分隔到一定程度之后，使用插入排序对齐每个分隔区间内的数字进行排序
 */
import {
	swap, 
	pritnf, 
	getRandomArray
} from '../utils';
import { insertionSort2 } from '../排序算法/插入排序';

document.title = '归并排序法';

// 将arr[l...mid]和arr[mid+1...r]两部分进行归并
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
		} else if ( aux[i - l] < aux[j - l] ) {
			list[k] = aux[i - l];
			i++;
		} else {
			list[k] = aux[j - l];
			j++;
		}
	}
}

/**
 * 递归使用归并排序，对arr[l...r]的范围进行排序
 * @param {*} list 数组
 * @param {*} l 数组最左边的位置
 * @param {*} r 数组最右边的位置
 */
function _mergeSort(list, l, r) {
	// 分隔为只有一个数字才结束
	// if (l >= r) return;

	// 优化:当分隔到足够小时，使用插入排序对分隔区间内的数字进行排序
	if (r - l <= 15) {
		insertionSort2(list, l, r);
		return;
	}

	let mid = Math.floor((l + r)/2);
	_mergeSort(list, l, mid);
	_mergeSort(list, mid + 1, r);
	if (list[mid] >= list[mid + 1]) {
		_merge(list, l, mid, r);
	}
}

function mergeSort(arrList) {
	const list = arrList.slice();
	const len = list.length;
	_mergeSort(list, 0, len - 1);
	return list;
}

// const test = getRandomArray(100);

// pritnf(test, 1);
// pritnf(mergeSort(test), 2);

/***
 * 
 * 实现自底向上的归并排序
 * 不需要进行分隔，直接向上进行归并排序
 * 重要作用：因为没有使用数组，通过索引直接获取元素，可以很好的对链表进行排序
 */

function mergeSortBU(arrList) {
	const len = arrList.length;
	for (let sz = 1; sz <= len; sz += sz) {
		for (let i = 0; i + sz < len; i += sz + sz) {
			// 对arr[i...i+sz-1]和arr[i+sz...i+2*sz-1]进行归并
			const l = i;
			const mid = i + sz - 1;
			const r = Math.min(i + sz + sz - 1, len - 1);
			_merge(arrList, l, mid, r);
		}
	}
}


const test = getRandomArray(100);

pritnf(test, 1);
mergeSortBU(test)
pritnf(test, 2);