// selectionSort
// bubbleSort
// countSort
// insertionSort
// shellSort
// mergeSort
// mergeSort(自底向上)
var test = [65,2,42,22,21,73,95,27,46,13,25,36,9,3,5,29,95,75,86,32,64,55,73];

function swap(arrList, i, j) {
  if (i !== j) {
    const temp = arrList[i];
    arrList[i] = arrList[j];
    arrList[j] = temp;
  }
}

function selectionSort(arrList) {
  const len = arrList.length;
  for (let i = 0;i < len;i ++) {
    let index = i;
    for (let j = i + 1;j < len;j ++) {
      if (arrList[index] > arrList[j]) {
        index = j;
      }
    }
    swap(arrList, index, i);
  }
}

function bubbleSort(arrList) {
  const len = arrList.length;
  for (let i = 0;i < len;i ++) {
    for (let j = 0; j < len - i;j ++) {
      if (arrList[j - 1] > arrList[j]) {
        swap(arrList, j - 1, j);
      }
    }
  }
}

function countSort(arrList, n) {
  const len = arrList.length;
  const arr = new Array(n).fill(0);
  const list = [];

  for (let i = 0; i < len; i ++) {
    arr[arrList[i]]++;
  }

  for (let j = 0; j < arr.length;j ++) {
    while(arr[j] > 0) {
      list.push(j);
      arr[j]--;
    }
  }
  arr = null;
  return list;
}

function insertionSort(arrList) {
  const len = arrList.length;
  for (let i = 1; i < len; i ++) {
    for (let j = i; j > 0 && arrList[j] < arrList[j - 1]; j --) {
      swap(arrList, j, j - 1);
    }
  }
}

function shellSort(arrList) {
  const len = arrList.length;
  for (let i = Math.floor(len / 2); i > 0; i = Math.floor(i / 2)) {
    for (let j = i; j < len; j ++) {
      let k = j;
      let current = arrList[j];
      while( k - i >= 0 && current < arrList[k - i]) {
        arrList[k] = arrList[k - i];
        k = k - i;
      }
      arrList[k] = current;
    }
  }
}

function _merge(arrList, l, mid, r) {
  const aux = [];
  for (let i = l; i <= r; i ++) {
    aux[i - l] = arrList[i];
  }

  let i = l;
  let j = mid + 1;

  for (let k = l; k <= r; k ++) {
    if (i > mid) {
      arrList[k] = aux[j - l];
      j++;
    } else if (j > r) {
      arrList[k] = aux[i - l];
      i++;
    } else if (aux[i - l] < aux[j - l]) {
      arrList[k] = aux[i - l];
      i++;
    } else {
      arrList[k] = aux[j - l];
      j++;
    }
  }
}

function insertionSort1(arrList, l, r) {
  const len = arrList.length;
  for (let i = l + 1; i <= r; i ++) {
    for (let j = i; j > l && arrList[j] < arrList[j - 1]; j --) {
      swap(arrList, j, j - 1);
    }
  }
}

function _mergeSort(arrList, l, r) {
  // if (l >= r) return;
  if (r - l <= 15) {
    insertionSort1(arrList, l, r);
    return;
  }

  let mid = Math.floor((l + r)/2);
  _mergeSort(arrList, l, mid);
  _mergeSort(arrList, mid + 1, r);
  if (arrList[mid] > arrList[mid + 1]) {
    _merge(arrList, l, mid, r);
  }
}

function mergeSort(arrList) {
  const len = arrList.length;
  _mergeSort(arrList, 0, len - 1);
}

function mergeSortBU(arrList) {
	const len = arrList.length;
	for (let sz = 1; sz <= len; sz += sz) {
		for (let i = 0; i + sz < len; i += sz + sz) {
			const l = i;
			const mid = i + sz - 1;
			const r = Math.min(i + sz + sz - 1, len - 1);
			_merge(arrList, l, mid, r);
		}
	}
}

mergeSortBU(test);
console.log(test);