/**
 * 插入排序法 0(n^2)
 * 可以提前退出，性能比选择排序优秀，非常适合对一些相对有序的数组进行排序。
 * @param arrList number[]
 */
import {
	swap, 
	pritnf, 
	getRandomArray,
	getNearlyArray,
	getRangedArray
} from '../utils';

document.title = '插入排序法';

// 可以提前退出，不需要每次都全部遍历。
function insertionSort(arrList) {
	const list = arrList.slice();
	const len = list.length;
	for (let i = 1; i < len; i++) {
		// 寻找元素arr[i]位置插入位置
		for (let j = i; j > 0 && list[j] < list[j - 1]; j--) {
			swap(list, j, j - 1);
		}
	}
	return list;
}

const test = getNearlyArray(100);

// pritnf(test, 1);
// pritnf(insertionSort(test), 2);

// 改进版的插入排序法，减少赋值次数，当确定插入元素位置之后，再进行赋值
// 经过测试，在低数量级上，改进版会比原版稍快一点点。数量变大一些，反而会变慢。
function insertionSortNew(arrList) {
	const list = arrList.slice();
	const len = list.length;
	for (let i = 1; i < len; i++) {
		// 寻找元素arr[i]位置插入位置
		let e = list[i];
		let j;
		for (j = i; j > 0 && list[j - 1] > e; j--) {
			list[j] = list[j - 1];
		}
		list[j] = e;
	}
	return list;
}

pritnf(test, 1);

pritnf(insertionSortNew(test), 2);
