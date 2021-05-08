// 希尔排序其实可以看做是多段插入排序，比插入排序性能好O(n 3/2)。适合对相对有序的数据进行排序
import { pritnf, getRandomArray } from '../utils';

document.title = '希尔排序';

function shellSort(arrList) {
  const list = arrList.slice();
  const len = arrList.length;
  // gap 即为增量
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let j = i;
      let current = list[i];
      while(j - gap >= 0 && current < list[j - gap]) {
        list[j] = list[j - gap];
        j = j - gap;
      }
      list[j] = current;
    }
  }
  return list;
}
 
const test = getRandomArray(10);

pritnf(test, 1);
pritnf(shellSort(test), 2);