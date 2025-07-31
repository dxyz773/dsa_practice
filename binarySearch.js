function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === val) {
      return middle;
    } else if (val > arr[middle]) {
      start = middle + 1;
      middle = Math.floor((start + end) / 2);
    } else if (val < arr[middle]) {
      end = middle - 1;
      middle = Math.floor((start + end) / 2);
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 6));
console.log(binarySearch([1, 2, 3, 4, 5], 2));
