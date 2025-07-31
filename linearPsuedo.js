function psuedo(arr, val) {
  return arr.includes(val) ? arr.indexOf(val) : -1;
}

console.log(psuedo([1, 2, 3, 4], 6));
console.log(psuedo([1, 2, 3, 4], 4));
