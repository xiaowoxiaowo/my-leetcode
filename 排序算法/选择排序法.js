/**
 * 给一串大小顺序打乱的数字按从小到大的顺序进行排序
 * @param list number[]
 */
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

 function selectionSort(list) {
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

 const test = [10,3,7,2,5,1,9,8,6];

 console.log(selectionSort(test));