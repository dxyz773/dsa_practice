const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
        // let temp = arr[j + 1];
        // arr[j + 1] = arr[j];
        // arr[j] = temp;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([1, 7, 3, 45, 24, 555, 8, 201, -3]));
