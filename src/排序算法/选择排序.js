/**
 * 选择排序法 0(n^2)
 * @param arrList number[]
 */
import { swap, pritnf } from '../utils';

document.title = '选择排序法';

 function selectionSort(arrList) {
	const list = arrList.slice();
	const len = list.length;
	for (let i = 0; i < len; i ++) {
		let minIndex = i;
		for (let j = i + 1; j < len; j ++) {
			if (list[minIndex] > list[j]) {
				minIndex = j;
			}
		}
		swap(list, i, minIndex);
	}
	return list;
 }

 const test = [10,3,7,2,5,1,9,8,6,9];

 pritnf(test, 1);
 pritnf(selectionSort(test, 2));