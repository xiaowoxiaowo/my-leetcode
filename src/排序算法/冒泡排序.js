// 冒泡排序比较简单，直接写优化版的冒泡排序
import { swap, pritnf, getRandomArray } from '../utils';

document.title = '冒泡排序';

function bubbleSort(arr) {
  let n = arr.length
  if (n <= 1) return arr

  for (let i = 0; i < n; i++) {
    let flag = false
    // 一次冒泡，右边就会多一位已经处理好的最大数据
    // 所以这里的终止条件可以是n - i再减去1
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        flag = true
      }
    }
    // 如果这次循环都没有数字被交换 说明已经是排序好的数组, 可以提前退出
    if (!flag) return arr
  }
  return arr
}

const test = getRandomArray(10);

pritnf(test, 1);
pritnf(bubbleSort(test), 2);